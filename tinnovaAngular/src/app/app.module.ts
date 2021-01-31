import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VeiculoDetailsComponent } from './veiculo-details/veiculo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVeiculoComponent,
    VeiculoListComponent,
    UpdateVeiculoComponent,
    VeiculoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
