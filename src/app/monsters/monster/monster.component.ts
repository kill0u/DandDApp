import { Component, OnInit } from "@angular/core";
import { MonsterData, Monster } from "../../models/monster";
import { MonsterService } from "../monster.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-monster",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./monster.component.html",
  styleUrl: "./monster.component.scss",
})
export class MonsterComponent implements OnInit {
  monsters: Monster[] = [];

  constructor(readonly monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monsters = this.monsterService.monsters;
  }
}
