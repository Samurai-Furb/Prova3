import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  {
    path: 'cadastro',
    loadComponent: () => import('./components/cadastro/cadastro.component').then(m => m.CadastroComponent)
  }
];
