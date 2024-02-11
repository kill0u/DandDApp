import { gql } from "apollo-angular";

const GET_MONSTERS = gql`
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
`;

export { GET_MONSTERS };
