import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root',
})

export class RickMorty {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);

  getCharacters(page = 1, name = ''): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}?page=${page}&name=${name}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
