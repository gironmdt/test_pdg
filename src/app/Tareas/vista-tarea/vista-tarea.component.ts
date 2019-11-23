import { Component, OnInit } from '@angular/core';
import { SerivicioTareas } from 'src/app/Servicios/Tareas/tareas.service';
import { Tareas } from 'src/app/Models/Tareas/tarea.model';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddTareasComponent } from '../add-tareas/add-tareas.component';

@Component({
  selector: 'app-vista-tarea',
  templateUrl: './vista-tarea.component.html',
  styleUrls: ['./vista-tarea.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class VistaTareaComponent implements OnInit {

  public lTareas = new Array<Tareas>();
  public modalReference: NgbModalRef;
  
  constructor(public oSerivicioTarea: SerivicioTareas, private modalService: NgbModal
  ) {
    
  }

  

  ngOnInit() {
    this.CargarTareas();
    this.CargarTareasSubscribe();
  }

  /**
   * Cargar tareas desde HTTP
   */
  public CargarTareas() {
    this.oSerivicioTarea.getTareas().subscribe(tareas => {
      console.log(tareas);
      this.lTareas = tareas.Tareas;
    });
  }

  /**
   * Evento Subscribe, para cargue de tareas
   */
  public CargarTareasSubscribe() {
    this.oSerivicioTarea.getTareasSubscribe().subscribe((tareas:any) => {
      console.debug(tareas)
      this.lTareas = tareas.Tareas;
    });
  }




  /**
   * Abrir modal de tareas
   * @param content objeto de modal
   */
  public openModaTarea(content) {
    this.modalReference = this.modalService.open(AddTareasComponent)
    this.modalReference.componentInstance.AgregarTareas.subscribe(tarea => {
      this.AddTareaToArray(tarea);
      this.modalReference.close()
    });
  }

  /**
   * Accion de boton de editar tarea
   * @param oTarea Objeto de tarea a modificar
   */
  public editarTarea(oTarea: Tareas) {
    this.modalReference = this.modalService.open(AddTareasComponent)
    this.modalReference.componentInstance.oTareas = oTarea;
    this.modalReference.componentInstance.AgregarTareas.subscribe(tarea => {
      this.AddTareaToArray(tarea);
      this.modalReference.close()
    });
  }

  /**
   * Adicionar tarea a arreglo
   * @param oTarea 
   */
  public AddTareaToArray(oTarea: Tareas) {
    if (oTarea.ID) {
      //Si existe ID, se modifica
      this.eliminarTarea(oTarea);
      this.lTareas.push(oTarea);
    } else {
      //Si no existe ID, Agrega
      var ID: number = +this.lTareas.reduce(function (max, tarea): number {
        return tarea.ID > max ? tarea.ID : max
      }, 0) + 1;
      oTarea.ID = ID;
      this.lTareas.push(oTarea);
    }
    this.oSerivicioTarea.ModidyBD(this.lTareas);
  }


  /**
   * Accion de boton de eliminar tarea
   * @param oTarea Objeto de tarea a eliminar
   */
  public eliminarTarea(oTarea: Tareas) {
    this.lTareas = this.lTareas.filter(tarea => !(tarea.ID == oTarea.ID));
    this.oSerivicioTarea.ModidyBD(this.lTareas);
  }


}
