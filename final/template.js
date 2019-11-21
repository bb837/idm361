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

function formHandler () {
    event.preventDefault();
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

    var resultText = document.getElementById("result-text");
    // var growthPd = product.growth;
    // console.log(growthPd);


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
    console.log(growthPd);
    console.log(resultRatio);

    if (resultRatio >= 0 && resultRatio >= 0.99)
    if (resultRatio)
    
}

// set another var for growth