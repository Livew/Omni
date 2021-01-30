import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../models/veiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {

  veiculo: Veiculo = new Veiculo();
  submitted = false;

  constructor(private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit() {
  }

  newVeiculo(): void {
    this.submitted = false;
    this.veiculo = new Veiculo();
  }

  save() {
    this.veiculoService
    .createVeiculo(this.veiculo).subscribe(data => {
      console.log(data)
      this.veiculo = new Veiculo();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/veiculos']);
  }

}
