import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { Monster, MonsterData } from "../models/monster";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import { GET_MONSTERS } from "../graphql.operations";

@Injectable({
  providedIn: "root",
})
export class MonsterService {
  monsters: Monster[] = [];
  error: any;
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  /*getMonsters(): Observable<MonsterData> {
    return this.monsters;
  }*/
}
