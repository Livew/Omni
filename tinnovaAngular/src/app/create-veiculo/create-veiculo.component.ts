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

  anos: number[] = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
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
    this.veiculo.updated = new Date();
    this.veiculo.created = new Date();
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
