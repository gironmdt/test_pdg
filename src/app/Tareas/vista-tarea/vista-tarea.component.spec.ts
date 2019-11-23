import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTareaComponent } from './vista-tarea.component';
import { SerivicioTareas } from 'src/app/Servicios/Tareas/tareas.service';
import {  HttpClientModule } from '@angular/common/http';

describe('VistaTareaComponent', () => {
  let component: VistaTareaComponent;
  let fixture: ComponentFixture<VistaTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ VistaTareaComponent ],
      providers:[SerivicioTareas]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async function() {
    const app = fixture.debugElement.componentInstance;
    await app.CargarTareas();
  });

  it(`Las tareas deben ser mayor diff null`, async () => {
    const fixture = TestBed.createComponent(VistaTareaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lTareas).not.toBeNull();
  });
});
