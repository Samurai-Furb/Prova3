import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Funcionario } from '../../models/funcionario.model';

@Component({
  selector: 'app-funcionario-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {
  @Input() funcionario!: Funcionario;
}
