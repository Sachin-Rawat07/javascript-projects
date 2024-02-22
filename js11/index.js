const input=document.getElementById("myInput");
const btn=document.getElementById("myBtn");
// Helo Wrld

const Btnclicked=()=>{
    //alert("clicked");
    //sessionStorage.setItem("key1",input.value);
    localStorage.setItem("key1",input.value);
};

btn.addEventListener("click",Btnclicked);


if(sessionStorage.getItem("key1")){
    //alert(sessionStorage.getItem("key1"));
    alert(localStorage.getItem("key1"));
}
//alert(localStorage.getItem("key1"));

 