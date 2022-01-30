const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const banner = document.createElement("div");
banner.className = "banner";
banner.style.height = innerHeight + "px";

const main = document.createElement("main");

container.append(banner, main);

const mainCaption = document.createElement("h2");
mainCaption.className = "main__caption";
mainCaption.innerText = "4 types of plants";

class Plant {
    constructor(capt, imgPath, cnt, mini) {
        this.caption = capt;
        this.pic = imgPath;
        this.count = cnt;
        this.imgType = mini;
    }
};
const data = [
    new Plant("Foliage", "img/fruit_1.png", 21, "img/plant_1.png"),
    new Plant("Succulent", "img/fruit_2.png", 4, "img/plant_2.png"),
    new Plant("Flower", "img/fruit_3.png", 8, "img/plant_3.png"),
    new Plant("Fruit", "img/fruit_4.png", 10, "img/plant_4.png"),
];

main.append(mainCaption);

// data.forEach(plant => {
//     const card = document.createElement("div")
//     card.className = "main__item";
//     card.style.backgroundImage = `url(${plant.pic})`
//     typesOfPlants.append(card);
// })

let mainContent = "";
data.forEach(plant => {
    mainContent += `
        <div class="main__item" style="background-image: url(${plant.pic})">
            <h3>${plant.caption}</h3>
            <div class="main__item-text">${plant.count} plants</div>
            <img alt="${plant.caption}" src="${plant.imgType}">
        </div>
    `
})

main.innerHTML += mainContent;

// Доверстать макет: https://www.figma.com/file/quqyaCCE4uBCdUX526bNU4/Plant-Shop-Website-(Practice-%23001)-(Community)?node-id=0%3A1

// Шапка сайта
const header = document.createElement("div");
const headerLogo = document.createElement("div");
const headerService = document.createElement("div");
const headerBlog = document.createElement("div");
const headerShop = document.createElement("div");
const headerLocation = document.createElement("div");
const headerCheck = document.createElement("div");

header.className = "page__header";
headerLogo.innerHTML = `<img alt="pic" src="img/logo.png">`;
headerService.innerText = "Service";
headerBlog.innerText = "Blog";
headerShop.innerText = "Shop";
headerLocation.innerText = "Location";
headerCheck.innerText = "Check out";
headerCheck.className = "check__out";
headers = [
    headerLogo, headerService, headerBlog, headerShop, headerLocation, headerCheck
];
banner.append(header);
headers.forEach(el => {
    header.append(el)
});

// Заголовок на баннере
const title = document.createElement("div")
title.innerHTML = "<h3>Let's find your love <span class='banner__plants'>plants</span></h3>"
title.className = "banner__title";
banner.append(title)

// Текст под заголовком на баннере
const text = document.createElement("div")
text.innerHTML = "Add some color to your home, give it a little attention, the plants will accompany you quietly"
text.className = "banner__text"
banner.append(text)

// Картинки на баннере
const pictures = [
    "img/plant_1.png",
    "img/plant_2.png",
    "img/plant_3.png",
    "img/plant_4.png"
]

const bannerPics = document.createElement("div")
bannerPics.className = "mini__pictures"
banner.append(bannerPics);
pictures.forEach(el => {
    const picture = document.createElement("div");
    picture.style.backgroundImage = `url(${el})`
    picture.className = "mini__picture"
    bannerPics.append(picture)
})




