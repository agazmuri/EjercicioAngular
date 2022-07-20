import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenAleatoriaComponent } from './imagen-aleatoria.component';

describe('ImagenAleatoriaComponent', () => {
  let component: ImagenAleatoriaComponent;
  let fixture: ComponentFixture<ImagenAleatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenAleatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
