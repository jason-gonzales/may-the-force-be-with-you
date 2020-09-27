var enterButton = document.querySelector("#enter-btn");
var homePage = document.querySelector(".homepage");
var genPage = document.querySelector(".gen-homepage")
var nextButton = document.querySelector("#next-btn");
var infoName = document.querySelector("#info-name");
var infoHair = document.querySelector("#info-hair");
var infoEyes = document.querySelector("#info-eyes");
var infoGender = document.querySelector("#info-gender");


var gifButton = document.querySelector("#gif-btn");
var gifContainer = document.querySelector("#gif");

enterButton.addEventListener("click",flipPage);

function flipPage() {
homePage.classList.add("hidden");
genPage.classList.remove("hidden");

}

nextButton.addEventListener("click",getInfo);
gifButton.addEventListener("click",getGif);


function getInfo(character) {
  var random = Math.floor((Math.random() * 40) + 1);
  $.ajax({
    url: "https://swapi.dev/api/people/" + random,
    method: "GET",
    // headers: {
    //   "Origin":null
    // },
    success: function (data) {

      updateInfo(data);
      var character = data.name;

      getGif(character);
      //call the getGif()
      //pass in the name property of the response
      //use the value from name property and concat to your url in your request
      //when requesting api

      return character;
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

function getGif(character) {
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=30&offset=0&rating=g&lang=en",
  method: "GET",
  success: function (data) {
    clearImage();
    var image = document.createElement("img");

    console.log(character);
    image.src = data.data[0].images.original.url;


    gifContainer.append(image);
    image.className = "border-0";
  },
  error: function (error) {
    console.error(error)
  }
})

function clearImage() {
  gifContainer.textContent ="";
}
}
