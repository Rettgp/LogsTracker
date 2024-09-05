export function ParseColor(parse : number) : string {
    if (parse <= 24) {
        return "#666666";
    } else if (parse >= 25 && parse <= 49) {
        return "#129900";
    } else if (parse >= 50 && parse <= 74) {
        return "#0070ff";
    } else if (parse >= 75 && parse <= 94) {
        return "#a335ee";
    } else if (parse >= 95 && parse <= 98) {
        return "#ff8000";
    } else if (parse === 99) {
        return "#e268a8";
    } else {
        return "#e5cc80";
    }
}

export function ClassColor(className : string) : string {
    switch(className) {
        case "Warrior":
            return "#c69b6d";
        case "Paladin":
            return "#f48CBA";
        case "Hunter":
            return "#aad372";
        case "Rogue":
            return "#fff468";
        case "Priest":
            return "#ffffff";
        case "Shaman":
            return "#0070dd";
        case "Mage":
            return "#3fc7eb";
        case "Warlock":
            return "#8788ee";
        case "Monk":
            return "#00ff98";
        case "Druid":
            return "#ff7c0a";
        case "DemonHunter":
            return "#a330c9";
        case "DeathKnight":
            return "#c41e3a";
        case "Evoker":
            return "#33947f";
        default:
            return "#666666";
    }
}
