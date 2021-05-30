let deviceWidth = screen.width;
console.log(deviceWidth);
let bigEnough = "<td style=\"padding-left:1rem;\"> <address\> <p>Location: Bikini Bottom, Pacific Ocean</p> <p>Address: 831 Bottom Feeder Lane</p><p>Contact Us: <a href=\"mailto: scottgb04@outlook.com\">krustykrab@krustykrab.com</a></p></address></td>"
let small = "<address><p>Location: Bikini Bottom, Pacific Ocean</p><p>Address: 831 Bottom Feeder Lane</p><p>Contact Us: <a href=\"mailto: scottgb04@outlook.com\">krustykrab@krustykrab.com</a></p></address></td>"
if(deviceWidth < 600)
    document.write(small);
else
    document.write(bigEnough);