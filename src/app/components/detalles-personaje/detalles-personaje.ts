import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Character } from '../../models/characters.model';


@Component({
  selector: 'app-detalles-personaje',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './detalles-personaje.html',
  styleUrl: './detalles-personaje.scss',
})
export class DetallesPersonaje {
  @Input() c: Character | null = null;
  @Input() view: boolean = false;
  @Output() closeDetail = new EventEmitter<void>();

  close() {
    this.closeDetail.emit();
  }
}
