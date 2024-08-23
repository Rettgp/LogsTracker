export function ParseColor(parse : number) : string {
    if (parse <= 24) {
        return "#666666";
    } else if (parse >= 25 && parse <= 49) {
        return "#1eff00";
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
