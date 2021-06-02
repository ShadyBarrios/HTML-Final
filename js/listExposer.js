let foodContent = "<ul><li><a href=\"detailedMenu.html\">Detailed Menu</a></li><li><a href=\"reviews.html\">Food Reviews</a></li>";
let foodButton = document.getElementById("foodButton");
let foodArea = document.getElementById("foodContent");
let foodExpanded = false; // false = not shown. true = shown

let jobsContent = "<ul><li><a href = \"hired.html\">The Hired</a></li><li><a href = \"toBeHired.html\">Job Seekers</a></li></ul>"
let jobsButton = document.getElementById("jobsButton");
let jobsArea = document.getElementById("jobsContent");
let jobsExpanded = false;

function procedure(innerHTML){
    console.log("The innerHTML pass is " + innerHTML);
    if(innerHTML == "Food"){
        if(foodExpanded == true){
            console.log("removing content");
            foodArea.innerHTML = "";
            foodExpanded = false;
            console.log(foodExpanded);
        }
        else{
            console.log("adding in content");
            foodArea.innerHTML = foodContent;
            foodExpanded = true;
            console.log(foodExpanded);
        }  
    }
    else if (innerHTML == "Jobs"){ // innerHTML == jobs
        if(jobsExpanded == true){
            console.log("removing content");
            jobsArea.innerHTML = "";
            jobsExpanded = false;
            console.log(jobsExpanded);
        }
        else{
            console.log("adding in content");
            jobsArea.innerHTML = jobsContent;
            jobsExpanded = true;
            console.log(jobsExpanded);
        }         
    }
    else    
        console.log("Invalid innerHTML");
}

function jobsProcedure(){
    procedure(jobsButton.innerHTML);
}

function foodProcedure(){
    procedure(foodButton.innerHTML);
}

foodButton.addEventListener('click', foodProcedure);
jobsButton.addEventListener('click', jobsProcedure);