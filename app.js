var nextButton = document.querySelector("#next-btn");
var infoName = document.querySelector("#info-name");

var gifButton = document.querySelector("#gif-btn");
var gifContainer = document.querySelector("#gif");

nextButton.addEventListener("click",getInfo);
gifButton.addEventListener("click",getGif);

function getInfo() {
  var random = Math.floor((Math.random() * 10) + 1);
  $.ajax({
    url: "https://swapi.dev/api/people/" + random,
    method: "GET",
    // headers: {
    //   "Origin":null
    // },
    success: function (data) {
      updateInfo(data.name, data.hair_color, data.eye_color);

    },
    error: function (error) {
      console.error(error)
    }
  })
}
function updateInfo(name,hair,eye) {
  infoName.innerText = name +": " + hair  + " hair" + ", "+  eye
  + " eyes";
  // if(name === "Luke Skywalker") {
  //   infoName.innerText.classList.add("chewy");
  // }

}

var images = "https://giphy.com/gifs/star-wars-no-14kjySOKhofYI";
function getGif() {

$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=25&offset=0&rating=g&lang=en",
  method: "GET",
  success: function (data) {
    console.log(images);

  },
  error: function (error) {
    console.error(error)
  }
})
}

function updateGif(data) {

  gifContainer.innerText = images.src;


}
