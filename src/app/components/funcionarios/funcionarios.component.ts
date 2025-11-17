import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../../models/funcionario.model';
import { FuncionarioService } from '../../services/funcionario.service';
import { RouterModule } from '@angular/router';
import { FuncionarioCardComponent } from '../funcionario-card/funcionario-card.component';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
  imports: [
    CommonModule,             
    RouterModule,
    FuncionarioCardComponent  
  ]
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.funcionarios = data);
  }
}
