import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonaje } from './detalles-personaje';

describe('DetallesPersonaje', () => {
  let component: DetallesPersonaje;
  let fixture: ComponentFixture<DetallesPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPersonaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
