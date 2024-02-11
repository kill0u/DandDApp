interface ArmorClass {
  value: number;
  type: string;
}

export interface Monster {
  name: string;
  index: string;
  armor_class: ArmorClass[];
  desc: string | null;
  alignment: string;
  charisma: number;
  condition_immunities: any[]; // Changez le type si nécessaire
  proficiency_bonus: number;
  challenge_rating: number;
  constitution: number;
  damage_immunities: any[]; // Changez le type si nécessaire
  damage_resistances: any[]; // Changez le type si nécessaire
  damage_vulnerabilities: any[]; // Changez le type si nécessaire
  dexterity: number;
}

export interface MonsterData {
  monsters: Monster[];
}
