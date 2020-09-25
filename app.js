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


function getGif() {
  var random2 = Math.floor((Math.random() * 10) + 1);
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=25&offset=0&rating=g&lang=en" + random2,
  method: "GET",
  success: function (data) {
    console.log(data.data[0]);
    var image = document.createElement("iframe");
    image.src = data.data[1].embed_url;

    gifContainer.append(image);
  },
  error: function (error) {
    console.error(error)
  }
})
}
