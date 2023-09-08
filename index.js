var textChange = document.getElementById("about_me");
var mainContent = document.querySelector("#content");
textChange.addEventListener("click" , titleChange);
var contact = document.getElementById("contact");
contact.addEventListener("click", email);

//function addMainToList() {
 //   var ul = document.getElementById("ul");
   // var li = document.createElement("li");
    //li.appendChild(document.createTextNode("MAIN"));
    //ul.appendChild(li)
    //ul.appendChild(li).classList.add("li4");
  //}


function titleChange(){
        mainContent.classList.add("content_change");
        mainContent.innerHTML="Enthusiastic</br> Developer </br> Ready </br>to </br>rock </br>the</br> World!";

   }

function email(){
    window.open('mailto:jakub.adamski12@gmail.com');
}
    






