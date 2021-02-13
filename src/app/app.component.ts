import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokemon';

  nomePrincipal: string;  //Nome que aparecerá na área de descrição

  listaPokemonInicial: Array<any> = new Array<any>(); //Recebe os 100 primeiros pokemons com name e url.

  listaHabilidade: Array<any> = new Array<any>(); //Lista que recebe somente as abilities.(parte do Json)

  listaTipo: Array<any> = new Array<any>(); // Lista que recebe somente os Types (parte do Json).

  imagem: string;

  nomedet: string; // nome que será acrescentado na pesquisa da Url. no service

  constructor(private pokService: PokemonService) {}

  ngOnInit() {
    this.pokService
      .listar()
      .then((resposta) => (this.listaPokemonInicial = resposta.results)); //RESULTADO DO RESULT NO ARRAY DA API
  }

  detalhe(nome: any) {
    this.nomedet = nome;
    this.nomePrincipal = this.nomedet;
    this.pokService
      .detalhar(this.nomedet)
      .then((resposta) => {
        this.listaHabilidade = resposta.abilities;
        this.listaTipo = resposta.types;
        this.imagem = resposta.sprites.back_default;
      });
  }
}
