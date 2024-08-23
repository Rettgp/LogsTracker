import { Player } from "./Player"
import { Encounter } from "./Encounter"

export class DungeonInfo {
    encounters: Array<Encounter>

    constructor(encounters: Array<Encounter>) {
        this.encounters = encounters;
    }

    public GetParticipatingPlayers() : Array<Player> {
        let players = new Array<Player>
        for (let encounter of this.encounters) {
            if (players.length < encounter.players.length) { // TODO: Need a better way to collate the players
                players = encounter.players;
            }
        }

        return players;
    }

    public GetAverageParseForPlayer(playerName: string) : number {
        let parses = new Array<number>();
        for (let encounter of this.encounters) {
            for (let player of encounter.players) {
                if (player.name === playerName) {

                }
            }
        }

        if (parses.length === 0) {
            return 0;
        }

        const averageCalc = (array : any) => array.reduce((a : number, b : number) => a + b) / array.length;
        return (averageCalc(parses));
    }
}