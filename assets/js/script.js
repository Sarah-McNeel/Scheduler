function settingDate(date, day) {
    date = new Date(date);
    date.setDate(day);
    date.setHours(23);
}
function getDatesBetween(date1, date2) {
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    date1 = settingDate(date1, 31);
    date2 = settingDate(date2, 31);
    console.log(date1 + " " + date2);
}

let content = getDatesBetween("2020/10/01", "2020/10/31");
document.getElById("calendar").innerHTML = content;




 