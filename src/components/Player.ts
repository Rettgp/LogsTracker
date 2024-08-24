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
  parses: Map<number, number> = new Map<number, number>();
  className: string

  constructor(name: string, role: Role, className: string) {
    this.name = name;
    this.role = role;
    this.className = className;
  }

  public AverageParse() : number {
    let parses = Array.from(this.parses.values());
    if (parses.length === 0) {
        return 0;
    }

    const averageCalc = (array : any) => array.reduce((a : number, b : number) => a + b) / array.length;
    return (Math.round(averageCalc(parses)));
  }

  public ParseIcon() : any {
    let average = this.AverageParse();
    if (average <= 24) {
      return GreyImg;
    } else if (average >= 25 && average <= 49) {
      return BronzeImg;
    } else if (average >= 50 && average <= 74) {
      return SilverImg;
    } else if (average >= 75 && average <= 94) {
      return GoldImg;
    } else if (average >= 95 && average <= 98) {
      return SuperGoldImg;
    } else if (average === 99) {
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