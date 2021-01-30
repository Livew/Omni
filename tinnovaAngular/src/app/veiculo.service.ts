import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private baseUrl = 'http://localhost:8080/api/veiculos';

  constructor(private http: HttpClient) { }

  getVeiculo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVeiculo(veiculo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, veiculo);
  }

  updateVeiculo(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVeiculo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVeiculoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
