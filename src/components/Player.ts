export class Player {
  name: string;
  role: Role;
  parse: number;

  constructor(name: string, role: Role, parse: number) {
    this.name = name;
    this.role = role;
    this.parse = parse;
  }
}

export enum Role {
  Tank,
  Healer,
  Dps
}