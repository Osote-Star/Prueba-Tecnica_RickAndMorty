import { Routes } from '@angular/router';
import { ListadoPersonajes } from './components/listado-personajes/listado-personajes';

export const routes: Routes = [
    {path: '', component: ListadoPersonajes},
    {path: '**', redirectTo: ''},
];
