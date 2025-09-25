import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAlumnos } from './editor-alumnos';

describe('EditorAlumnos', () => {
  let component: EditorAlumnos;
  let fixture: ComponentFixture<EditorAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
