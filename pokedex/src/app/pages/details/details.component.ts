import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  private readonly urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private readonly urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any; // Considere tipar isto
  public isLoaded: boolean = false; // Renomeado
  public apiError: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.loadPokemonData(); // Renomeado e chamado
  }

  private loadPokemonData() { // Transformado em método
    const id = this.activateRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoaded = true; // Renomeado
      },
      error => {
        this.apiError = true;
      }
    );
  }
}
