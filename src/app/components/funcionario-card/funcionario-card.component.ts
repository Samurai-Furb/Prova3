import { Component, Input } from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-funcionario-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})

export class FuncionarioCardComponent {
  @Input() funcionario!: Funcionario;
}
