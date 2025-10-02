import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumnos2 } from './alumnos2';

describe('Alumnos2', () => {
  let component: Alumnos2;
  let fixture: ComponentFixture<Alumnos2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumnos2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumnos2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
