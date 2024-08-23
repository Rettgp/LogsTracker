import { Player } from "./Player"

export class Encounter {
    id: number;
    name: string;
    players: Array<Player>

    constructor(id: number, name: string, players: Array<Player>) {
        this.id = id;
        this.name = name;
        this.players = players;
    }

    public GetParseForPlayer(playerName: string) : number {
        for (let playerData of this.players) {
            if (playerData.name === playerName) {
                return playerData.parse;
            }
        }

        return 0;
    }
}