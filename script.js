
let darkMode =  () =>{


     primaryColor = 'black';
     secondaryColor = "white" 
     if(primaryColor == 'black' && secondaryColor == 'white'){
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "black";
     }


}
navbar = document.getElementsByClassName('navbar')
navList = document.getElementsByClassName('navList')



function myburger(){
   console.log("Working")
   navList.classList.toggle('v-class')
   // navbar.classList.toggle('h-class')
}