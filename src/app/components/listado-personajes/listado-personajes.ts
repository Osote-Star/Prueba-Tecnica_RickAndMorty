import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RickMorty } from '../../services/rick-morty';
import { Character } from '../../models/characters.model';
import { DetallesPersonaje } from '../detalles-personaje/detalles-personaje';


@Component({
  selector: 'app-listado-personajes',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    DetallesPersonaje],
  templateUrl: './listado-personajes.html',
  styleUrl: './listado-personajes.scss',
})
export class ListadoPersonajes {
  private service = inject(RickMorty);

  characters = signal<Character[]>([]);
  totalPages = signal(1);
  totalItems = signal(0);
  page = signal(1);
  search = signal('');
  selectedCharacter: Character | null = null;
  modalVisible: boolean = false;

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.service.getCharacters(this.page(), this.search()).subscribe({
      next: res => {
        this.characters.set(res.results ?? []);
        this.totalItems.set(res.info?.count ?? 0);
        this.totalPages.set(res.info?.pages ?? 1);

      },
      error: () => {
        this.characters.set([]);
        this.totalItems.set(0);
        this.totalPages.set(1);
      }
    });
  }

  onSearchChange(value: string) {
    this.search.set(value);
    this.page.set(1);
    this.loadCharacters();
  }

  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages()) return;
    this.page.set(newPage);
    this.loadCharacters();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  filteredCharacters = computed(() =>
    this.characters().filter(c =>
      c.name.toLowerCase().includes(this.search().toLowerCase())
    )
  );


  openDetail(c: Character) {
    this.selectedCharacter = c;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedCharacter = null;
  }

  visiblePages() {
    const total = this.totalPages();
    const current = this.page();
    const delta = 2; // cantidad de páginas visibles a los lados

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    pages.push(1);

    if (left > 2) pages.push('...');

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < total - 1) pages.push('...');

    pages.push(total);

    return pages;
  }




}
