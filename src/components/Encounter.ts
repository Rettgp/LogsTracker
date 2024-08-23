import { Player } from "./Player"

export class Encounter {
    name: string;
    players: Array<Player>

    constructor(name: string, players: Array<Player>) {
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