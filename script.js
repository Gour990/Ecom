function toggleMenu(){

let nav = document.getElementById("nav");

if(nav.style.display=="block"){
nav.style.display="none";
}
else{
nav.style.display="block";
}

}

function filterProject(type){

let projects=document.querySelectorAll(".project");

projects.forEach(project=>{

if(type=="all"){
project.style.display="block"
}

else if(project.classList.contains(type)){
project.style.display="block"
}

else{
project.style.display="none"
}

})

}
