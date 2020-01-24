function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    hours < 10 ? hours="0"+hours:"";
    min < 10 ? min="0"+min:"";
    sec < 10 ? sec="0"+sec:"";

    document.getElementById("hour").innerHTML= hours + " :";
    document.getElementById("min").innerHTML= min + " :";
    document.getElementById("sec").innerHTML= sec ;
}
setInterval(clock,100);