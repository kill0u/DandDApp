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

  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.fetchMonsters();
  }

  fetchMonsters(): void {
    this.monsterService.getMonsters().subscribe((data: MonsterData) => {
      this.monsters = data.monsters;
      console.log("data : ", data.monsters);
    });
  }

  getArmorClass(monster: Monster): string {
    return monster.armor_class.length > 0
      ? monster.armor_class[0].value.toString()
      : "Unknown";
  }
}
