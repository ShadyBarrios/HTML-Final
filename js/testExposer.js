let content = "<ul><li><a href=\"detailedMenu.html\">Detailed Menu</a></li><li><a href=\"order.html\">Order Food</a></li><li><a href=\"cart.html\">View Cart</a></li></ul>";
let area = document.getElementById('jobsArea');
let button = document.getElementById('jobsButton');
let boolean = false;

function procedure(text){
    console.log(text);
}

function jobsProcedure(){
    procedure("jobs");
}


document.getElementById('jobsButton').addEventListener('click', jobsProcedure);