import puppeteer from "puppeteer"

export class WarcraftLogParser {
    url: string;
    guildLogs: Array<string> = []

    constructor(url: string) {
        this.url = url;
    }

    public async ParseGuildLogs() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(this.url);
        await page.waitForSelector('#reports-table');
        const dataElements = await page.$$('#reports-table tbody tr td a'); // Replace with a selector from the React app
        for (const element of dataElements) {
            const text = await page.evaluate(element => element.href, element);
            console.log(text)
        }
    }
}