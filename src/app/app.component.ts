import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokemon';

  listaPokemonInicial: Array<any> = new Array<any>();

  listaPokemonDetalhado: Array<any> = new Array<any>();

  nomedet: string;

  constructor(private pokService: PokemonService) {}

  ngOnInit() {
    this.pokService
      .listar()
      .then((resposta) => (this.listaPokemonInicial = resposta.results)); //RESULTADO DO RESULT NO ARRAY DA API
  }

  detalhe(nome: any) {
    this.nomedet = nome;
    this.pokService
      .detalhar(this.nomedet)
      .then((resposta) => (this.listaPokemonDetalhado = resposta));
  }
}
