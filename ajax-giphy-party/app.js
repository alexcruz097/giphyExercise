const searchBTN = document.querySelector("#search-btn");
const removeBTN = document.querySelector("#remove-btn");
let imgContainer = document.querySelector(".img-container");
let input = document.querySelector("input");
let giphyURL;

async function getGiphy(input) {
    try{
  // get data
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  //   destructure data
  const { data } = res.data;
  //   craete random number to display diffrent images
  let randonNum = Math.floor(Math.random() * data.length - 1);
  // add url to giphy
  giphyURL = data[randonNum].images.original.url;
    }catch(e){
        console.error(e)
    }

}

// when Search Giphy is clicked
searchBTN.addEventListener("click", function (e) {
  e.preventDefault();
  //   call getGIphy function based on input value
  getGiphy(input.value);
  // create img element
  let newIMG = document.createElement("IMG");
  //   add src to image
  newIMG.src = giphyURL;
  //  append img
  imgContainer.appendChild(newIMG);
  input.value = ""
});

// Remove all images
removeBTN.addEventListener("click", function () {
  imgContainer.innerHTML = ``;
});
