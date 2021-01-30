// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'add', component: CreateVeiculoComponent },
  { path: 'update/:id', component: UpdateVeiculoComponent },
  // { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
