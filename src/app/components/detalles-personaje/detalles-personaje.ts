import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/characters.model';

@Component({
  selector: 'app-detalles-personaje',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './detalles-personaje.html',
  styleUrl: './detalles-personaje.scss',
})
export class DetallesPersonaje {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Character) {}
}
