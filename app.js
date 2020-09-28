var enterButton = document.querySelector("#enter-btn");
var homePageButton = document.querySelector("#home-btn");
var homePage = document.querySelector(".homepage");
var genPage = document.querySelector(".gen-homepage")
var nextButton = document.querySelector("#next-btn");
var infoName = document.querySelector("#info-name");
var infoHair = document.querySelector("#info-hair");
var infoEyes = document.querySelector("#info-eyes");
var infoGender = document.querySelector("#info-gender");
var character = null;


var gifButton = document.querySelector("#gif-btn");
var gifContainer = document.querySelector("#gif");

enterButton.addEventListener("click",flipPage);
homePageButton.addEventListener("click",homePageHandleClick);

function flipPage() {
  console.log("hit")
homePage.classList.add("hidden");
genPage.classList.remove("hidden");

}

function homePageHandleClick() {
  genPage.classList.toggle("hidden");
  homePage.classList.toggle("hidden");
}

nextButton.addEventListener("click",getInfo);



function getInfo() {
  clearImage();
  var random = Math.floor((Math.random() * 20) + 1);

  $.ajax({
    url: "https://swapi.dev/api/people/" + random + "/",
    method: "GET",
    // headers: {
    //   "Origin":null
    // },
    success: function (data) {

      updateInfo(data);
      character = data.name;
      if (character){
        gifButton.addEventListener("click", getGif);


      }

    },
    error: function (error) {
      console.error(error)
    }

  })
}
function updateInfo(data) {
  infoName.innerText = data.name;
  infoHair.innerText = "hair color: " + data.hair_color;
  infoEyes.innerText = "eye color: " + data.eye_color;
  infoGender.innerText = "gender: " + data.gender;

}

function getGif() {
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=40&offset=0&rating=g&lang=en",
  method: "GET",

  success: function (data) {

    var image = document.createElement("img");

if(character === "C-3PO") {
  gifContainer.classList.add("c3po");
} else if(character === "R2-D2") {
  gifContainer.classList.add("r2d2");
} else if(character ==="Greedo") {
  gifContainer.classList.add("greedo");
} else if(character ==="Biggs Darklighter") {
  gifContainer.classList.add("biggs");
} else if(character ==="Beru Whitesun lars") {
  gifContainer.classList.add("beru")
}

else {

  image.src = data.data[0].images.original.url;
    gifContainer.append(image);
    image.className = "border-0";
}
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
