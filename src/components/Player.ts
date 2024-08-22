import GreyImg from '../images/grey.png';
import BronzeImg from '../images/bronze.png';
import SilverImg from '../images/silver.png';
import GoldImg from '../images/gold.png';
import SuperGoldImg from '../images/super-gold.png';
import PlatinumImg from '../images/platinum.png';
import DiamondImg from '../images/diamond.png';

export class Player {
  name: string;
  role: Role;
  parse: number;

  constructor(name: string, role: Role, parse: number) {
    this.name = name;
    this.role = role;
    this.parse = parse;
  }

  public ParseColor() : string {
    if (this.parse <= 24) {
      return "#666666";
    } else if (this.parse >= 25 && this.parse <= 49) {
      return "#1eff00";
    } else if (this.parse >= 50 && this.parse <= 74) {
      return "#0070ff";
    } else if (this.parse >= 75 && this.parse <= 94) {
      return "#a335ee";
    } else if (this.parse >= 95 && this.parse <= 98) {
      return "#ff8000";
    } else if (this.parse === 99) {
      return "#e268a8";
    } else {
      return "#e5cc80";
    }
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