//    NAV      //

function openNav(){
    // document.getElementById("cancel").style.visibility = "visable";
    document.getElementById("overlay").style.height = "100%";
    document.getElementById("nav-icon").style.opacity = "0";
  }
  
  document.getElementById("nav-icon").addEventListener("click", openNav, false);
  
  function closeNav(){
    document.getElementById("overlay").style.height = "0%";
    document.getElementById("nav-icon").style.opacity = "1";
    console.log('nav-icon');
  }
  document.getElementById("cancel").addEventListener("click",closeNav, false);