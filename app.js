var enterButton = document.querySelector("#enter-btn");
var homePageButton = document.querySelector("#home-btn");
var homePage = document.querySelector(".homepage");
var genPage = document.querySelector(".gen-homepage")
var nextButton = document.querySelector("#next-btn");
var infoName = document.querySelector("#info-name");
var infoBirth = document.querySelector("#info-birth");
var infoHair = document.querySelector("#info-hair");
var infoEyes = document.querySelector("#info-eyes");
var infoGender = document.querySelector("#info-gender");
var gifButton = document.querySelector("#gif-btn");
var gifContainer = document.querySelector("#gif");
var character = null;

enterButton.addEventListener("click",flipPage);
homePageButton.addEventListener("click",homePageHandleClick);

function flipPage() {

homePage.classList.add("hidden");
genPage.classList.remove("hidden");


}

function homePageHandleClick() {
  genPage.classList.toggle("hidden");
  homePage.classList.toggle("hidden");
  nextButton.classList.remove("next-btn");
  nextButton.classList.add("next-btn2");
  gifButton.classList.remove("gif-btn");
  gifButton.classList.add("gif-btn2");
  homePageButton.classList.remove("homepage-btn");
  homePageButton.classList.add("homepage-btn2");


}

nextButton.addEventListener("click",getInfo);

var infoDes = document.querySelector(".info-description");

function getInfo() {
  infoDes.classList.add("hidden");
  clearImage();
  var random = Math.floor((Math.random() * 18) + 1);

  $.ajax({
    url: "https://swapi.dev/api/people/" + random + "/",
    method: "GET",

    success: function (data) {

      updateInfo(data);
      character = data.name;
      if (character){
        gifButton.addEventListener("click", getGif);

        gifButton.disabled = false;
    }

    },
    error: function (error) {
      console.error(error)
    }

  })
}
function updateInfo(data) {

  infoName.innerText = data.name;
  infoBirth.innerText = "birth year : " + data.birth_year;
  infoHair.innerText = "hair color : " + data.hair_color;
  infoEyes.innerText = "eye color : " + data.eye_color;
  infoGender.innerText = "gender : " + data.gender;

}

function getGif() {
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=40&offset=0&rating=g&lang=en",
  method: "GET",

  success: function (data) {

    var image = document.createElement("img");
    var div = document.createElement("div");

if(character === "C-3PO") {
  div.classList.add("c3po");
  gifContainer.append(div);
} else if(character === "R2-D2") {
  div.classList.add("r2d2");
  gifContainer.append(div);
} else if(character ==="Greedo") {
  div.classList.add("greedo");
  gifContainer.append(div);
} else if(character ==="Biggs Darklighter") {
  div.classList.add("biggs");
  gifContainer.append(div);
} else if(character ==="Beru Whitesun lars") {
  div.classList.add("beru")
  gifContainer.append(div);
} else if(character === "R5-D4") {
  div.classList.add("r5d4");
  gifContainer.append(div);
} else if(character === "Obi-Wan Kenobi") {
  div.classList.add("obi");
  gifContainer.append(div);
} else if(character === "Owen Lars") {
  div.classList.add("owen");
  gifContainer.append(div);
}

else {

  image.src = data.data[0].images.original.url;
  // image.style.maxWidth = "250px";
    gifContainer.append(image);
    image.className = "border-0";
}

gifButton.disabled = true;
  },
  error: function (error) {
    console.error(error)
  }
})
}
function clearImage() {
  gifContainer.textContent = "";
  gifContainer.classList.remove("c3po")
  gifContainer.classList.remove("r2d2")
  gifContainer.classList.remove("greedo")
  gifContainer.classList.remove("biggs")
  gifContainer.classList.remove("beru")

}
