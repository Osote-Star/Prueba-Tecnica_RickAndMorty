import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonajes } from './listado-personajes';

describe('ListadoPersonajes', () => {
  let component: ListadoPersonajes;
  let fixture: ComponentFixture<ListadoPersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPersonajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
