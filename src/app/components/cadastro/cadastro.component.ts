import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  idConsulta: number = 0;
  dados: any = null;

  status: string = '';
  mensagem: string = '';

  form = {
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  constructor(private cadastroService: CadastroService) {}

  consultar() {
    if (!this.idConsulta) return;

    this.cadastroService.consultar(this.idConsulta).subscribe((res: any) => {
      this.dados = res;

      this.form.nome = res.nome;
      this.form.departamento = res.departamento;
      this.form.endereco = res.endereco;
      this.form.email = res.email;
    });
  }

  excluir() {
    this.cadastroService.excluir(this.idConsulta).subscribe((res: any) => {
      this.status = res.status;
      this.mensagem = res.mensagem;
    });
  }

  alterar() {
    this.cadastroService.alterar(this.idConsulta, this.form).subscribe((res: any) => {
      this.status = res.status;
      this.mensagem = res.mensagem;
    });
  }
}
