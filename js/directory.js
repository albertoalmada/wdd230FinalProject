const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const directory = jsonObject['directory'];
    const groups = document.querySelector('templeCards');

    directory.forEach(temple => {
            // Create elements to add to the document  
            let  picture = document.createElement('img');        
            let  group = document.createElement('div');
            let  templeName = document.createElement('h2');
            let  address = document.createElement('p');
            let  phoneNumber = document.createElement('p');
            
            
           

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            picture.setAttribute('src', "images/" + picture);
            picture.setAttribute('alt', `${temple.templeName}`);
            picture.setAttribute('loading', 'lazy');

          
            // Change the textContent property of the h3 element to contain the companies full name
            templeName.textContent = `${temple.templeName}`;
            address.textContent = `${temple.address}`;
            phoneNumber.textContent = `${temple.phoneNumber}`;
            
            
          
          
            // Add/append the section(card) with the h2 element
            group.appendChild(picture);
            group.appendChild(templeName);
            group.appendChild(address);
            group.appendChild(phoneNumber);
            
            
            
          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });

  /* --------- buttons ---------- */

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".groups");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}