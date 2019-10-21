//Create Objects
function veg(name, season, img, basePrice, picklePrice, juicePrice, description) {
    this.name = name;
    this.season = season;
    this.img = img;
    this.basePrice = basePrice;
    this.picklePrice = picklePrice;
    this.juicePrice = juicePrice;
    this.description = description;

}

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
const corn = new veg(
    "Corn",
    "Summer, Fall",
    "img/Corn.png",
    50,
    150,
    112,
    "One of the most popular grains. The sweet, fresh cobs are a summer favorite."
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
const corn = new veg(
    "Corn",
    "Summer, Fall",
    "img/Corn.png",
    50,
    150,
    112,
    "One of the most popular grains. The sweet, fresh cobs are a summer favorite."
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



const vegList = [
    amaranth,
    artichoke,
    beet,
    bokchoy,
    cauliflower
];

const container = document.getElementById("index-main");

//Build each sign button
    //create a button
    //giove button id
    //give button class
    //create img
    //create description
    //create img source
    //create img alt
    //fill paragraph with text
    //append the img and paragraph to the button
    //return the button

    const createItem = veg => {
        const button = document.createElement("NAME IT HERE"); //what element am i making here that matches the HTML layout

        button.id = '${veg.name}';
        button.classList.add("GIVE CLASS"); //A class of what???

        const itemImage = document.createElement("img");
        const description = document.createElement("h3");

        itemImage.src = veg.img;
        itemImage.alt = '${veg.name}';
        description.innerHTML = veg.name;

        button.appendChild(itemImage);
        button.appendChild(signButton); //WHAT IS signButton ERIK

        return button;
    }

// Appends each sign button to their container      DOES THIS MEAN I HAVE TO MAKE THIS ITEM SAY MAKE EACH BUTTON GO TO A PAGE???
//     const buildItems = () => {
//         vegList.forEach(signName => {
//     const signButton = createSign(signName);
//       container.appendChild(signButton);
//     });
//   };



// Base to silver N x 1.25
// Base to gold N x 1.5
// Base to iridium N x 2


// JAVASCRIPT CKECKLIST
    //MAKE ALL VEGETABLE OBJECTS
    //CHECK createItem THAT IT MAKES THE ITEMS ON THE HOME SCREEN
    //MAKE SURE THEY ARE LINKS, MAKE SURE THAT DATA WILL CARRY OUT TO THE NEXT PAGE
    //MAKE SOMETHING THAT HOLDS DATA FROM BUTTON CLICKED INTO TEMPLATE.HTML
    //MAKE TEMPLATE FORM
    //FORM VALIDATION