let area = document.getElementById("comments");
let counter = 0; // just so that it doesn't delete everytime just incase the user clicks off



function erase(){
    if(counter == 0){
         area.innerHTML="";
        counter++;
    } 
    else if(counter == 1){
       console.log("Content has already been deleted");
    }    
    else{
        console.log("Very weird exception. Counter: " + counter);
    }
}

area.addEventListener('click', erase);