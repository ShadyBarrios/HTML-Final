let bigEnough = "<td style=\"padding-left:1rem;\"> <address> <p>Location: Bikini Bottom, Pacific Ocean</p> <p>Address: 831 Bottom Feeder Lane</p><p>Contact Us: <a href=\"mailto: scottgb04@outlook.com\">krustykrab@krustykrab.com</a></p></address></td>";
let small = "<address><p><br>Location: Bikini Bottom, Pacific Ocean</p><p>Address: 831 Bottom Feeder Lane</p><p>Contact Us: <a href=\"mailto: scottgb04@outlook.com\">krustykrab@krustykrab.com</a></p></address></td>";
const firstPart = "<td style=\"padding-right:1rem;\"><p>The Krusty Krab&trade; </p><p> Home of the <span class=\"italic\">Krabby Patty</span>&trade;</p><p>Come spend <span class=\"italic\">your</span> money here!&trade;</p></td>"

function footerAdjuster(){
    let deviceWidth = window.innerWidth;
    let area = document.getElementById("footerTable");

    if(deviceWidth < 600){
        let total = firstPart + small;
        console.log("Small Display footer");
        area.innerHTML = total;
    }
    else{
        let total = firstPart + bigEnough;
        console.log("Big Display footer");
        area.innerHTML = total;
    }
}

// for when the page is initially opened
footerAdjuster();

window.onresize = footerAdjuster;