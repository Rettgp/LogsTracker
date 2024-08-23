import { gql, GraphQLClient  } from 'graphql-request'
import OAuth2 from 'client-oauth2';

import { DungeonInfo } from './DungeonInfo'
import { Encounter } from './Encounter'
import { Player, Role } from './Player'

const GET_GUILD_LOGS = gql`
    query GetGuildLogs($id: Int!) {
        reportData {
            reports(guildID: $id, limit: 1) {
                data {
                    code
                }
            }
        }
    }
`;

const GET_RANKINGS_FOR_LOG = gql`
    query GetRankings($id: String!) {
        reportData {
            report(code: $id) {
                rankings
            }
        }
    }
`;

export class WarcraftLogParser {
    logAuth: OAuth2
    clientId: string = '9cd48cf1-50e7-4a2f-928d-a09311049641'
    clientSecret: string = '8R0FvANFDosuMX1nxcQ3cscxPLqYg5JZoRLDcyVH'
    oauthPromise: any = null
    endpoint: string = 'https://www.warcraftlogs.com/api/v2/client'
    client: GraphQLClient = new GraphQLClient(this.endpoint)

    constructor() {
        this.logAuth = new OAuth2({
            clientId: this.clientId,
            clientSecret: this.clientSecret,
            accessTokenUri: 'https://www.warcraftlogs.com/oauth/token'
        });
    }

    public ParseGuildLogs(guildId: number) : Promise<DungeonInfo> {
        return new Promise((resolve, reject) => {
            this.ObtainAccessToken().then(async (token) => {
                this.client.setHeader("Authorization", `Bearer ${token.accessToken}`);
                const guildLogs : any = await this.client.request(GET_GUILD_LOGS, {id: guildId});
                const reportIds = guildLogs.reportData.reports.data;
                let encounters = new Array<Encounter>
                for (let reportId of reportIds) {
                    let rankings : any = await this.client.request(GET_RANKINGS_FOR_LOG, {id: reportId.code});
                    let encountersData = rankings.reportData.report.rankings.data;
                    for (let encounterData of encountersData) {
                        let encounterName = encounterData.encounter.name;
                        let players: Array<Player> = new Array<Player>();
                        for (let tankData of encounterData.roles.tanks.characters) { // TODO: Handle No tanks 
                            players.push(new Player(tankData.name, Role.Tank, tankData.rankPercent, tankData.class));
                        }
                        for (let healerData of encounterData.roles.healers.characters) { // TODO: Handle No tanks 
                            players.push(new Player(healerData.name, Role.Healer, healerData.rankPercent, healerData.class));
                        }
                        for (let dpsData of encounterData.roles.dps.characters) { // TODO: Handle No tanks 
                            players.push(new Player(dpsData.name, Role.Dps, dpsData.rankPercent, dpsData.class));
                        }

                        encounters.push(new Encounter(encounterName, players));
                    }
                }

                resolve(new DungeonInfo(encounters));
            });
        });
    }

    private ObtainAccessToken() : Promise<OAuth2.Token> {
        // todo: need retries and error catching
        if (this.oauthPromise !== null) {
            return this.oauthPromise;
        }
        this.oauthPromise = this.logAuth.credentials.getToken();
        return this.oauthPromise;
    }
}