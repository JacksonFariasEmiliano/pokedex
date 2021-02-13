import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //Lista pokemon
  PokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  PokeDetail='https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  listar(): Promise<any> {
    return this.http
      .get<any[]>(`${this.PokeUrl}`)
      .toPromise().then((respota) => respota);
  }

  detalhar(nome: string) : Promise<any>{
    return this.http.get<any>(`${this.PokeDetail}`+`${nome}`)
    .toPromise()
    .then(resposta => resposta);
  }
}
