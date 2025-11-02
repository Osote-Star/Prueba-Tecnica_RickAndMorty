import { Component, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RickMorty } from '../../services/rick-morty';
import { Character } from '../../models/characters.model';
import { DetallesPersonaje } from '../detalles-personaje/detalles-personaje';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-personajes',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    DetallesPersonaje],
  templateUrl: './listado-personajes.html',
  styleUrl: './listado-personajes.scss',
})
export class ListadoPersonajes {
  private service = inject(RickMorty);
  private dialog = inject(MatDialog);

  characters = signal<Character[]>([]);
  totalItems = signal(0);
  page = signal(1);
  search = signal('');

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.service.getCharacters(this.page(), this.search()).subscribe({
      next: res => {
        this.characters.set(res.results);
        this.totalItems.set(res.info.count);
      },
      error: () => this.characters.set([]),
    });
  }

  onSearchChange(name: string) {
    this.search.set(name);
    this.page.set(1);
    this.loadCharacters();
  }

  onPageChange(event: PageEvent) {
    this.page.set(event.pageIndex + 1);
    this.loadCharacters();
  }

  openDetails(character: Character) {
    this.dialog.open(DetallesPersonaje, {
      data: character,
      width: '40px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '150ms',
    });
  }





}
