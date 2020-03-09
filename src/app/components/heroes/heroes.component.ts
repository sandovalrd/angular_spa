import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../../interfaces/heroes.interface";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private _heroesServices: HeroesService) {}
  heroes: Heroe[];
  heroe: Heroe;
  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }
}
