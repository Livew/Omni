import { Veiculo } from '../models/veiculo';
import { Component, OnInit, Input } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { VeiculoListComponent } from '../veiculo-list/veiculo-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-details',
  templateUrl: './veiculo-details.component.html',
  styleUrls: ['./veiculo-details.component.css']
})
export class VeiculoDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['veiculos']);
  }

}
