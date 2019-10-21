//    NAV      //

function openNav(){
    document.getElementById("overlay").style.height = "100%";
  }
  
  document.getElementById("nav-icon").addEventListener("click", openNav, false);
  
  function closeNav(){
    document.getElementById("overlay").style.height = "0%";
  
  }
  document.getElementById("cancel").addEventListener("click",closeNav, false);