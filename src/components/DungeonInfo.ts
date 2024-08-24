import { Player } from "./Player"
import { Encounter } from "./Encounter"

export class DungeonInfo {
    encounters: Array<Encounter>

    constructor(encounters: Array<Encounter>) {
        this.encounters = encounters;
    }

    public GetPlayersInRankingOrder() : Array<Player> {
        let players = new Array<Player>
        for (let encounter of this.encounters) {
            if (players.length < encounter.players.length) { // TODO: Need a better way to collate the players
                players = encounter.players;
            }
        }

        players.sort((a: Player, b: Player) => b.AverageParse() - a.AverageParse());
        return players;
    }
}