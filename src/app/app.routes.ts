import { Routes } from "@angular/router";
import { MonsterComponent } from "./monsters/monster/monster.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "monsters" },
  { path: "monsters", component: MonsterComponent },
];
