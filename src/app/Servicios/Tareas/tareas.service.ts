import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Tareas } from 'src/app/Models/Tareas/tarea.model';

@Injectable()
export class SerivicioTareas {

    tareaSubject = new Subject();

    constructor(private http: HttpClient) {
        window.addEventListener("storage", this.storageEnvetListerner.bind(this));
    }

    /**
     * Evento de escucha a storage
     * @param event 
     */
    private storageEnvetListerner(event: StorageEvent) {
        if (event.storageArea == localStorage) {
            let v;
            console.debug(event.newValue)
            v = JSON.parse(event.newValue);
            this.tareaSubject.next(v);
        }
    }




    
    /**
     * Obtener las tareas desde JSON
     */
    public getTareas(): Observable<any> {
        return this.http.get("./assets/tareas.json");
    }

    /**
     * Adicionar a BD, en este caso localstorage
     * @param lTareas 
     */
    public ModidyBD(lTareas: Array<Tareas>) {
        console.debug("AddToBD")
        localStorage.setItem("tareas", JSON.stringify({ "Tareas": lTareas }))
        //this.tareaSubject.next(lTareas)
    }

    /**
     * Envio de observable, para transmitir info.
     */
    public getTareasSubscribe() {
        return this.tareaSubject.asObservable();
    }


}