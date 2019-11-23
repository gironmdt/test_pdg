import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaTareaComponent } from './Tareas/vista-tarea/vista-tarea.component';
import { SerivicioTareas } from './Servicios/Tareas/tareas.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddTareasComponent } from './Tareas/add-tareas/add-tareas.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    VistaTareaComponent,
    AddTareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgbModule,
    MatInputModule,
    FormsModule
  ],
  providers: [SerivicioTareas],
  bootstrap: [AppComponent],
  entryComponents:[AddTareasComponent]
})
export class AppModule { }
