/* Laboratorio #1
Daniela Viafara Delgado
ECO
utilizar fetch y p5 para acostumbranos al lenguaje*/


let canvas = undefined;
let apidogs = undefined;
let apibitcoin = undefined;
let apiusa = undefined;
let apicats = undefined;
let apiusers = undefined;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(148, 210, 189);
    newCursor();

    textSize(25)
    text('CLICK TO SEE SOME RANDOM API!!!', 50, 50)

    if (apidogs !== undefined) {
        textSize(20)
        text('PRETTY DOGS!', 90, 100)
        image(apidogs,124,130,250,250)
    }
    if (apibitcoin !== undefined) {
        text('BITCOIN USD TODAY', 98, 435)
        text(apibitcoin,124,465)
    }
    if (apiusa !== undefined) {
        text('DID YOU KNOW THAT THE USA POPULATION IS...', 90, 540)
        text(apiusa,124,580)
    }
    if (apicats !== undefined) {
        text('HERE SOME CAT DAD JOKES', 90, 660)
        text(apicats,124,690)
    }
    if (apiusers !== undefined) {
        text('RANDOM USER NAMES MOMENT', 90, 760)
        text(apiusers,124,800)
    }
}

function mouseClicked(){
    GetDogsApi('https://dog.ceo/api/breeds/image/random')
    GetBitcoinApi('https://api.coindesk.com/v1/bpi/currentprice.json')
    GetUsaApi('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    GetCatsApi('https://catfact.ninja/fact')
    GetUsersApi('https://randomuser.me/api/')

}

async function GetDogsApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    apidogs = loadImage(data.message)
    console.log(apidogs);
}

async function GetBitcoinApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    apibitcoin = data.bpi.USD.rate
    console.log(apibitcoin);
}

async function GetUsaApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    apiusa = data.data[0].Population

    console.log(apiusa);
}

async function GetCatsApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    apicats = data.fact
    console.log(apicats);
}

async function GetUsersApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    apiusers = data.results[0].name.first
    console.log(apiusers);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}