import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Monster, MonsterData } from "../models/monster";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MonsterService {
  constructor(private apollo: Apollo) {}

  getMonsters(): Observable<MonsterData> {
    return this.apollo
      .query<MonsterData>({
        query: gql`
          query GetMonsters {
            monsters {
              name
              index
              armor_class {
                value
                type
              }
              desc
              alignment
              charisma
              condition_immunities
              proficiency_bonus
              challenge_rating
              constitution
              damage_immunities
              damage_resistances
              damage_vulnerabilities
              dexterity
            }
          }
        `,
      })
      .pipe(map((result: MonsterData) => result.monsters));
  }
}
