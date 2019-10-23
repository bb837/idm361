//Create Objects
function veg(name, season, img, basePrice, picklePrice, juicePrice, description) {
    this.name = name;
    this.season = season;
    this.img = img;
    this.basePrice = basePrice;
    this.picklePrice = picklePrice;
    this.juicePrice = juicePrice;
    this.description = description;

};

const amaranth = new veg(
    "Amaranth",
    "Fall",
    "img/Amaranth.png",
    150,
    350,
    337,
    "A purple grain cultivated by an ancient civilization."
);

const artichoke = new veg(
    "Artichoke",
    "Fall",
    "img/Artichoke.png",
    160,
    370,
    360,
    "A bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior."
);

const beet = new veg(
    "Beet",
    "Fall",
    "img/Beet.png",
    100,
    250,
    225,
    "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad."
);

const bokchoy = new veg(
    "Bok Choy",
    "Fall",
    "img/Bok_Choy.png",
    80,
    210,
    180,
    "A bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior."
);

const cauliflower = new veg(
    "Cauliflower",
    "Spring",
    "img/Cauliflower.png",
    175,
    400,
    393,
    "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients."
);

const corn = new veg(
    "Corn",
    "Summer, Fall",
    "img/Corn.png",
    50,
    150,
    112,
    "One of the most popular grains. The sweet, fresh cobs are a summer favorite."
);

const eggplant = new veg(
    "Eggplant",
    "Fall",
    "img/Eggplant.png",
    60,
    170,
    135,
    "A rich and wholesome relative of the tomato. Delicious fried or stewed."
);
const fiddlehead = new veg(
    "Fiddlehead Fern",
    "Summer",
    "img/Fiddlehead_Fern.png",
    90,
    230,
    202,
    "The young shoots are an edible specialty."
);
const garlic = new veg(
    "Garlic",
    "Spring",
    "img/Garlic.png",
    60,
    170,
    135,
    "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy."
);
const greenbean = new veg(
    "Green Bean",
    "Spring",
    "img/Green_Bean.png",
    40,
    130,
    90,
    "A juicy little bean with a cool, crisp snap."
);
const hops = new veg(
    "Hops",
    "Summer",
    "img/Hops.png",
    50,
    150,
    112,
    "One of the most popular grains. The sweet, fresh cobs are a summer favorite."
);

const kale = new veg(
    "Kale",
    "Spring",
    "img/Kale.png",
    110,
    270,
    247,
    "The waxy leaves are great in soups and stir frys."
);

const parsnip = new veg(
    "Parsnip",
    "Spring",
    "img/Parsnip.png",
    35,
    120,
    78,
    "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients."
);

const potato = new veg(
    "Potato",
    "Spring",
    "img/Potato.png",
    80,
    210,
    180,
    "A widely cultivated tuber."
);

const pumpkin = new veg(
    "Pumpkin",
    "Fall",
    "img/Corn.png",
    320,
    690,
    720,
    "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration."
);

const radish = new veg(
    "Radish",
    "Summer",
    "img/Radish.png",
    90,
    230,
    202,
    "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration."
);

const cabbage = new veg(
    "Red Cabbage",
    "Summer",
    "img/Red_Cabbage.png",
    260,
    570,
    585,
    "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions."
);

const tomato = new veg(
    "Tomato",
    "Summer",
    "img/Tomato.png",
    60,
    170,
    135,
    "Rich and slightly tangy, the Tomato has a wide variety of culinary uses."
);

const wheat = new veg(
    "Wheat",
    "Summer, Fall",
    "img/Wheat.png",
    25,
    100,
    200,
    "One of the most widely cultivated grains. Makes a great flour for breads and cakes."
);

//WHEAT ISNT JUICE ITS BEER!!!!!

const yam = new veg(
    "Yam",
    "Fall",
    "img/Yam.png",
    160,
    370,
    360,
    "A starchy tuber with a lot of culinary versatility."
);



const vegList = [
    amaranth,
    artichoke,
    beet,
    bokchoy,
    cauliflower,
    corn,
    eggplant,
    fiddlehead,
    garlic,
    greenbean,
    hops,
    kale,
    parsnip,
    potato,
    pumpkin,
    radish,
    cabbage,
    tomato,
    wheat,
    yam
];

const container = document.getElementById("index-main");

    const createItem = veg => {
        const button = document.createElement("div"); //what element am i making here that matches the HTML layout

        button.id = `${veg.name}`;
        button.classList.add("item"); //A class of what???

        const itemImage = document.createElement("img");
        const imgItemText = document.createElement("div");
        const title = document.createElement("h3");

        itemImage.src = veg.img;
        itemImage.alt = `${veg.name}`;
        itemImage.classList.add("item-img");

        imgItemText.classList.add("img-item-text");
        title.innerHTML = veg.name;

        imgItemText.appendChild(title);

        button.appendChild(itemImage);
        button.appendChild(imgItemText);

        return button;
    };

    // const createItem = veg => {
    //     const para = document.createElement("p");

    //     console.log(veg.name);

    //     para.innerHTML = veg.name;

    //     return para;
    // }

    console.log(vegList);

    const buildVeg = () => {
        vegList.forEach(vegName => {
            console.log(veg.name);
            const vegButton = createItem(vegName);
            container.appendChild(vegButton);
        });
    };

    let myPromise = new Promise((resolve, reject) => {
        window.onload = () => {
            buildVeg();
            resolve("Success!");
        }
    })

//-------------------------------------------------------------//

// Base to silver N x 1.25
// Base to gold N x 1.5
// Base to iridium N x 2

//-------------------------------------------------------------//
//Local Storage

//BUG:: CHECKED ON RELOAD, BUT NOT WHEN LEAVING ANOTHER PAGE AND COMING BACK

function professionSave(){
    var checkbox = document.getElementById('tiller');
    if(document.getElementById('tiller').checked) {
        localStorage.setItem('tiller', true);
    }
}

function load(){    
    var checked = localStorage.getItem('tiller');
    if (checked === "true") {
        document.getElementById("tiller").setAttribute('checked','checked');
    }
}

//-------------------------------------------------------------//