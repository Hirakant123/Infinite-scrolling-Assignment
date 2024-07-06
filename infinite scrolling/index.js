

// here we are grabbing the element from the index.html file by getElementById

let container = document.getElementById("container");

let page = 1; // it like count if 

//simpli we are created a async function 


let getdata = async (URL) => {
  let res = await fetch(URL)  // we are fetching the data from the API 
  let data = await res.json(); // we are retrivig data in the normal form 
  console.log(data)  // displaying data in the console
  displaydata(data)  // invoking or calling the function and passing the data as the argument 
}

// invoke the function and  passsing the API as the argument 

getdata(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)






let displaydata = (data) => {   // displaydata function 

  data.forEach((ele) => {   // iterating over the each and every element in the array of object  using forEach


    let card = document.createElement("div")  // created a div with the name card 

    let title = document.createElement("h2") // created a h2 tag with name title 
    title.textContent = ele.title   // Accessing the value by the key name and asign to the variable

    let image = document.createElement("img") // created a image tag with the name image 
    image.src = ele.url          // Accessing the value by the key name and asign to the variable

    card.append(image, title)  // nd all those things that we have Accsesed append to the card(div) 

    container.append(card)  // and the card(child div) append to the container (parent div)

  })

}


// here we are adding a eventListener to the window 

window.addEventListener("scroll", function () {

  // all the keys are present inside that the document 
  // and the documentElement is also present and inside the documentElement key all the things are present like clienHeight etc.

  let clienHeight = document.documentElement.clientHeight;

  let scrollHeight = document.documentElement.scrollHeight;

  let scrolltop = document.documentElement.scrollTop;

  console.dir(document)  // nothing just consoling the document in the form of directory key value papir manner

  console.log(clienHeight, scrollHeight, scrolltop) // consoling that the variable who have assigned the values of clientHeight etc.



  // here what are doing substraking the clienHeight from the scrollHeight that it will returns the scrolltop  

  // and simply we are chaking scroll top is less than or equal to the updated value 

  if (Math.ceil(scrollHeight - clienHeight) <= Math.ceil(scrolltop)) {
    console.log("reach the bottom fetch the data")   // if yes then console a msg

    page++  //  increment

    // calling the getdata fun with passing API as  argument and if my scrollbar touch to the bottom it will call the  functionand get the data
    getdata(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

  }



})

