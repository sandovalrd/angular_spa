import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "src/app/interfaces/heroes.interface";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searHeroes(params["term"]);
      this.termino = params["term"];
    });
  }
}
