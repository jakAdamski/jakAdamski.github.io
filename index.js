var textChange = document.getElementById("about_me");
var mainContent = document.querySelector("#content");
textChange.addEventListener("mouseover" , titleChange);
textChange.addEventListener("mouseout" , titleRevert);
var contact = document.getElementById("contact");
contact.addEventListener("click", email);
var nameSpan = document.getElementById("name");
var surnameSpan = document.getElementById("surname");

function titleChange(){
        mainContent.classList.add("content_change");
        mainContent.innerHTML="Enthusiastic</br> Developer </br> Ready </br>To </br>Rock </br>The</br> World!";
      }
function titleRevert(){
    mainContent.classList.remove("content_change");
    mainContent.innerHTML=mainContent.innerHTML=`<h1 class="content_name">
    <span id="name">Jakub</span> 
    <span id="surname">Adamski</span>
    </h1><div id="btn_div">
    <a href="/projects.html"><button id="checkout_btn">Check out!</button></a>
</div>
    `;
  }
    
function email(){
    window.open('mailto:jakub.adamski12@gmail.com');
}
    






