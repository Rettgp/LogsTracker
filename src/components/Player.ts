import GreyImg from '../images/grey.png';
import BronzeImg from '../images/bronze.png';
import SilverImg from '../images/silver.png';
import GoldImg from '../images/gold.png';
import SuperGoldImg from '../images/super-gold.png';
import PlatinumImg from '../images/platinum.png';
import DiamondImg from '../images/diamond.png';

enum ClassId {
    Warrior = 11,
    Paladin = 6,
    Hunter = 3,
    Rogue = 8,
    Priest = 7,
    Shaman = 9,
    Mage = 4,
    Warlock = 10,
    Monk = 13,
    Druid = 2,
    DemonHunter = 12,
    DeathKnight = 1,
    Evoker = 13
}


export class Player {
  name: string;
  role: Role;
  parse: number;
  classId: ClassId

  constructor(name: string, role: Role, parse: number, classId: ClassId) {
    this.name = name;
    this.role = role;
    this.parse = parse;
    this.classId = classId;
  }

  public ParseIcon() : any {
    if (this.parse <= 24) {
      return GreyImg;
    } else if (this.parse >= 25 && this.parse <= 49) {
      return BronzeImg;
    } else if (this.parse >= 50 && this.parse <= 74) {
      return SilverImg;
    } else if (this.parse >= 75 && this.parse <= 94) {
      return GoldImg;
    } else if (this.parse >= 95 && this.parse <= 98) {
      return SuperGoldImg;
    } else if (this.parse === 99) {
      return PlatinumImg
    } else {
      return DiamondImg;
    }
  }
}

export enum Role {
  Tank,
  Healer,
  Dps
}