import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "src/app/interfaces/heroes.interface";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params["id"]);
    });
  }
}
