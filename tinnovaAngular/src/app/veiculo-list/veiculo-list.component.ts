
// import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { VeiculoService } from "../veiculo.service";
import { Veiculo } from "../models/veiculo";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  veiculos: Observable<Veiculo[]>;

  constructor(private veiculoService: VeiculoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.veiculos = this.veiculoService.getVeiculoList();
  }

  deleteEmployee(id: number) {
    this.veiculoService.deleteVeiculo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateVeiculo(id: number){
    this.router.navigate(['update', id]);
  }

}
