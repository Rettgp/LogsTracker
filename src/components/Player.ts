export class Player {
  name: string;
  role: Role;

  constructor(name: string, role: Role) {
    this.name = name;
    this.role = role
  }

  
}

export enum Role {
  Tank,
  Healer,
  Dps
}