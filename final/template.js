var product = JSON.parse(localStorage.getItem('product'));


var productImg = document.getElementById("template-image");
productImg.src = product.img;
productImg.alt = product.name;

var templateName = document.getElementById("template-name");
templateName.innerHTML = product.name;

var templateGrowth = document.getElementById("template-growth");
templateGrowth.innerHTML = "Growth: " + product.growth;

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

function formHandler () {
    event.preventDefault();
    var cropVal;
    if (cropBasic.checked == true) {
        cropVal = product.basePrice;
    } else if (cropSilver.checked == true) {
        cropVal = product.basePrice * 1.25;
    } else if (cropGold.checked == true) {
        cropVal = product.basePrice * 1.5;
    } else if (cropIridium.checked == true) {
        cropVal = product.basePrice * 2;
    }

    console.log(cropVal);

    var prodVal;
    if(prodAsIs.checked == true) {
        prodVal = cropVal;
    } else if (prodPickle.checked == true) {
        prodVal = product.picklePrice;    
    } else if (prodJuice.checked == true) {
        prodVal = product.juicePrice;
    }
    console.log(prodVal);

    var profPercentage = prodVal / cropVal * 100;
    console.log(profPercentage);

    
}


// 