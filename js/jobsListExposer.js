let content = "<ul><li><a href=\"detailedMenu.html\">Detailed Menu</a></li><li><a href=\"order.html\">Order Food</a></li><li><a href=\"cart.html\">View Cart</a></li></ul>";
let toBeFilled = document.getElementById("jobsContent");

function procedure(){
    if(boolean == true){
        console.log("removing content");
        toBeFilled.innerHTML = "";
        boolean = false;
        console.log(boolean);
    }
    else{
        console.log("adding in content");
        toBeFilled.innerHTML = content;
        boolean = true;
        console.log(boolean);
    }           
}

let boolean = false; //


document.getElementById('jobsButton').addEventListener("click", procedure);
