function check(value) {
    switch (value) {
        case 1:
            return "the month is january and the season is summer";
            break;
        case 2:
            return "the month is february and the season is summer";
            break;
        case 3:
            return "the month is march and the season is summer";
            break;
        case 4:
            return "the month is april and the season is fall";
            break;
        case 5:
            return "the month is may and the season is fall";
            break;
        case 6:
            return "the month is june and the season is fall";
            break;
        case 7:
            return "the month is july and the season  is winter";
        case 8:
            return "the month is august and the season is winter";
            break;
        case 9:
            return "the month is september and the season is winter";
            break;
        case 10:
            return "the month is october and the season is spring";
            break;
        case 11:
            return "the month is november and the season is spring";
            break;
        case 12:
            return "the month is december and the season is spring";
            break;
    }
    ;
}
;
const value = Number(prompt('type some number: '));
alert(check(value));
export {};
//# sourceMappingURL=exercise02.js.map