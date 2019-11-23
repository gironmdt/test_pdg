import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tareas } from 'src/app/Models/Tareas/tarea.model';

@Component({
  selector: 'app-add-tareas',
  templateUrl: './add-tareas.component.html',
  styleUrls: ['./add-tareas.component.css']
})
export class AddTareasComponent implements OnInit {

  @Input() public oTareas = new Tareas();
  @Output() public AgregarTareas = new EventEmitter<Tareas>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Accion de boton de agregar tarear
   */
  public AgregarTarea(){
    console.debug(this.oTareas);
    this.AgregarTareas.emit(this.oTareas);

  }

}
