var artisan = document.getElementById("artisan");
var tiller = document.getElementById('tiller');

window.onload = ProfessionCheck()

function ProfessionCheck() {
    if (localStorage.getItem('tiller') === "activated") {
        tiller.checked = true;
    }

    if (localStorage.getItem('artisan') === "activated") {
        artisan.checked = true;
    }
}

function professionSaveTiller(){
    if(document.getElementById('tiller').checked) {
        localStorage.setItem('tiller', true);
    }
}

tiller.addEventListener('click', function() {
    if (localStorage.getItem("tiller") === null) {
        localStorage.setItem('tiller', 'activated');
    } else {
        localStorage.removeItem('tiller');
        tiller.checked = false;
    }
}
, false);



//on window load, if tiller exists in LocalS, then  set check box to checked

function professionSaveArtisan(){    
    if (checked === "true") {
        document.getElementById("artisan").setAttribute('checked','checked');
    }
}

artisan.addEventListener('click', function() {
    if (localStorage.getItem("artisan") === null) {
        localStorage.setItem('artisan', 'activated');
    } else {
        localStorage.removeItem('artisan');
        artisan.checked = false;
    }
}
, false);

window.onload = function() {
    if (document.getElementsByTagName('title').innerHTML === "Settings") {
        console.log("on settings page");
    }
}



