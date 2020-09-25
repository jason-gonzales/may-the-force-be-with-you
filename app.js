var nextButton = document.querySelector("#next-btn");
var infoName = document.querySelector("#info-name");
var infoHair = document.querySelector("#info-hair");
var infoEyes = document.querySelector("#info-eyes");
var infoGender = document.querySelector("#info-gender");

var gifButton = document.querySelector("#gif-btn");
var gifContainer = document.querySelector("#gif");


nextButton.addEventListener("click",getInfo);
// gifButton.addEventListener("click",getGif);

function getInfo() {
  var random = Math.floor((Math.random() * 30) + 1);
  $.ajax({
    url: "https://swapi.dev/api/people/" + random,
    method: "GET",
    // headers: {
    //   "Origin":null
    // },
    success: function (data) {
      clearImage();
      updateInfo(data);
      var character = data.name;
      console.log(character);
      //call the getGif()
      //pass in the name property of the response
      //use the value from name property and concat to your url in your request
      //when requesting api
      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=30&offset=0&rating=g&lang=en" + random,
        method: "GET",
        success: function (data) {
          var image = document.createElement("img");
          for (var i = 0; i < data.data.length; i++) {
            image.src = data.data[i].images.original.url;
          }

          gifContainer.append(image);
          image.className = "border-0";
        },
        error: function (error) {
          console.error(error)
        }
      })

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

function clearImage() {
  gifContainer.textContent ="";
}

// function getGif() {
//   var random2 = Math.floor((Math.random() * 10) + 1);
// $.ajax({
//   url: "https://api.giphy.com/v1/gifs/search?api_key=tQvMLCK2J2FBihuD16peIhsL4BrkbhAU&q=starwars&limit=30&offset=0&rating=g&lang=en" + random2,
//   method: "GET",
//   success: function (data) {
//     var image = document.createElement("img");
//     for(var i = 0; i < data.data.length; i++) {
//     image.src = data.data[i].images.original.url;

//     }
//     gifContainer.append(image);
//     image.className = "border-0";
//   },
//   error: function (error) {
//     console.error(error)
//   }
// })
// }
