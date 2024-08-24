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
            return "#666666";
        case "Paladin":
            return "#666666";
        case "Hunter":
            return "#666666";
        case "Rogue":
            return "#666666";
        case "Priest":
            return "#666666";
        case "Shaman":
            return "#666666";
        case "Mage":
            return "#666666";
        case "Warlock":
            return "#666666";
        case "Monk":
            return "#666666";
        case "Druid":
            return "#666666";
        case "DemonHunter":
            return "#666666";
        case "DeathKnight":
            return "#666666";
        case "Evoker":
            return "#666666";
        default:
            return "#666666";
    }
}
