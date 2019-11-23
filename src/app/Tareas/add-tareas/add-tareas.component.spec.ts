import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTareasComponent } from './add-tareas.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AddTareasComponent', () => {
  let component: AddTareasComponent;
  let fixture: ComponentFixture<AddTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTareasComponent ],
      imports:[FormsModule,NgbModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
