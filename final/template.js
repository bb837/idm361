var product = JSON.parse(localStorage.getItem('product'));


var productImg = document.getElementById("template-image");
productImg.src = product.img;
productImg.alt = product.name;

var templateName = document.getElementById("template-name");
templateName.innerHTML = product.name;

var templateGrowth = document.getElementById("template-growth");
templateGrowth.innerHTML = "Growth: " + product.growth + " days";

var templateYield = document.getElementById("template-yield");
templateYield.innerHTML = product.cropyield + "Yield";

var qualityContainer = document.getElementById("quality-select");
var qualityItems = document.getElementsByClassName("quality-icon");
qualityItems = Array.prototype.slice.call(qualityItems);

qualityItems.forEach(quality =>{
    quality.src = product.img;
    quality.alt = product.name;
});

var cropBasic = document.getElementById("crop-basic");
var cropSilver = document.getElementById("crop-silver");
var cropGold = document.getElementById("crop-gold");
var cropIridium = document.getElementById("crop-iridium");

var prodAsIs = document.getElementById("AsIs");
var prodPickle = document.getElementById("pickle");
var prodJuice = document.getElementById("juice");

if (product.quality !== 4) {
    qualityContainer.removeChild(qualityContainer.lastElementChild);
};



var templateDescription = document.getElementById("template-description");
templateDescription.innerHTML = product.description;

var templateAsIs = document.getElementById("step2-asIs");
templateAsIs.src = product.img;
templateAsIs.alt = product.name;

var cropVal;
var prodVal;
var growthPd;
// var resultRatio = (prodVal - cropVal)/growthPd/100;
var resultText = document.getElementById("result-text");





function formHandler () {
    event.preventDefault();

    document.getElementById("result-container").style.display = "block";

    tiller();
    artisan();
    
    if (vegForm.checkValidity() === false) {
        mayDay();
    } else {
        displayResult();
    }

}

function displayResult() {
    if (mayDayDiv.style.display !== 'none') {
        mayDayDiv.style.display = 'none';
    }
    
    if (cropBasic.checked == true) {
        cropVal = product.basePrice;
    } else if (cropSilver.checked == true) {
        cropVal = product.basePrice * 1.25;
    } else if (cropGold.checked == true) {
        cropVal = product.basePrice * 1.5;
    } else if (cropIridium.checked == true) {
        cropVal = product.basePrice * 2;
    }

    // var prodVal;
    if(prodAsIs.checked == true) {
        prodVal = cropVal;
        growthPd = product.growth;
    } else if (prodPickle.checked == true) {
        prodVal = product.picklePrice; 
        growthPd = product.growth + 3;   
    } else if (prodJuice.checked == true) {
        prodVal = product.juicePrice;
        growthPd = product.growth + 7;
    }

    var profPercentage = prodVal / cropVal * 100;
    profPercentage = Math.round(profPercentage);

    var printProfit = document.getElementById("profit-text");
    
    printProfit.innerHTML = profPercentage + "% Profitability"

    if (profPercentage >= 300) {
        printProfit.style.color = "#599733";   
    } else if (profPercentage <= 199) {
        printProfit.style.color = "#CA524D";
    }

    if (isNaN(growthPd) == true) {
        resultText.innerHTML = "This is a forage item. Perhaps pickle it  or sell as is. Or make it into risotto!"
     } else {    
        createRatio();
     }
}

function createRatio() {
    var resultRatio = (prodVal - cropVal)/growthPd/10;
    console.log(prodVal);
    console.log(cropVal);

    if (resultRatio >= 0 && resultRatio <= 0.99) {
        resultText.innerHTML = "It is not worth the time and energy to make this. Perhaps sell it as is or use it for nutrients.";   
    } else if (resultRatio >= 1 && resultRatio <= 1.99) {
        resultText.innerHTML = "This exchange will bring you a fair profit. Use it sell or gift to your favorite townsperson.";
    } else if (resultRatio >= 2 && resultRatio <= 3) {
        resultText.innerHTML = "Wow! What a cash crop! Use this surplus to buy you a shiny new iridium watering can.";
    }  

}

function tiller() {
    if (localStorage.getItem("tiller") !== null) {
        product.basePrice = product.basePrice + (product.basePrice * .1);
    }
}

function artisan() {
    if (localStorage.getItem("artisan") !== null) {
        product.picklePrice = product.picklePrice + (product.picklePrice * .4);
    }
}
// set another var for growth