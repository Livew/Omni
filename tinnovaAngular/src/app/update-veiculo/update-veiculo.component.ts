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
