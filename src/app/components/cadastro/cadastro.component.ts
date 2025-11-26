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
      this.dados = res || null;

      if (res) {
        this.form.nome = res.nome || '';
        this.form.departamento = res.departamento || '';
        this.form.endereco = res.endereco || '';
        this.form.email = res.email || '';
      }
    }, err => {
      console.error('Erro ao consultar', err);
      this.dados = null;
      this.status = 'Erro';
      this.mensagem = 'Falha na consulta';
    });
  }

  excluir() {
    this.cadastroService.excluir(this.idConsulta).subscribe((res: any) => {
      this.status = res?.status ?? 'Erro';
      this.mensagem = res?.mensagem ?? 'Resposta inválida';
      if (this.status === 'Ok') this.dados = null;
    }, err => {
      console.error('Erro ao excluir', err);
      this.status = 'Erro';
      this.mensagem = 'Falha na exclusão';
    });
  }

  alterar() {
    this.cadastroService.alterar(this.idConsulta, this.form).subscribe((res: any) => {
      this.status = res?.status ?? 'Erro';
      this.mensagem = res?.mensagem ?? 'Resposta inválida';
    }, err => {
      console.error('Erro ao alterar', err);
      this.status = 'Erro';
      this.mensagem = 'Falha na alteração';
    });
  }
}
