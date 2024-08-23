import { gql, GraphQLClient  } from 'graphql-request'
import OAuth2 from 'client-oauth2';


const GET_GUILD_LOGS = gql`
    query GetGuildLogs($id: Int!) {
        reportData {
            reports(guildID: $id, limit: 10) {
                data {
                    code
                }
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

    public ParseGuildLogs(guildId: number) {
        this.ObtainAccessToken().then(async (token) => {
            this.client.setHeader("Authorization", `Bearer ${token.accessToken}`);
            const data = await this.client.request(GET_GUILD_LOGS, {id: guildId});
            console.log(data);
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