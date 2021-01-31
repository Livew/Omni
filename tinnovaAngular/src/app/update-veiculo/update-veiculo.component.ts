import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService} from '../veiculo.service';

@Component({
  selector: 'app-update-veiculo',
  templateUrl: './update-veiculo.component.html',
  styleUrls: ['./update-veiculo.component.css']
})
export class UpdateVeiculoComponent implements OnInit {

  anos: number[] = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
  id: number;
  veiculo: Veiculo;

  constructor(private route: ActivatedRoute,private router: Router,
    private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.veiculo = new Veiculo();

    this.id = this.route.snapshot.params['id'];
    
    this.veiculoService.getVeiculo(this.id)
      .subscribe(data => {
        console.log(data)
        this.veiculo = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.veiculoService.updateVeiculo(this.id, this.veiculo)
      .subscribe(data => {
        console.log(data);
        this.veiculo = new Veiculo();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/veiculos']);
  }

}
