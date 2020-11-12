//Create map
const map = L.map("mapid").setView([-27.2132517, -49.6385054], 15);

//Create and add tilerlayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //Remove icon became clicked
  marker && map.removeLayer(marker); // marker && === if(marker){#code...}

  //Select inputs type="hidden", lat and lgn
  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});


// Add photos in new field
function addPhotoField(){
    //Pick up the photo container where id = #images
    const container = document.querySelector('#images');
    //Take the container of last new-upload to duplicate .new-image
    const fieldContainer = document.querySelectorAll(".new-upload");
    //Perform duplication
    const cloneFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true); //true --> clone receive all childrens of the div cloned
    
    //Check if cloneFieldContainer[0](input) is empty, case true, don't append the clone in container
    const input = cloneFieldContainer.children[0];

    if(input.value == "") {return;}
    
    //Clear inputs in cloneFieldContainer
    input.value = "";
    //Add the clone in images container
    container.appendChild(cloneFieldContainer);
}

// Remove field new photo
function removePhotoField(event){
    //Get event span
    const span = event.currentTarget;

    //Receive all elements where class="new-upload"
    fieldsContainer = document.querySelectorAll('.new-upload');

    //Check if the container above is less than 2,
    //if true, field input will be empty
    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = "";
        return;
    }

    //Delete field
    span.parentNode.remove();
}

//Select yes or no
function selectedOption(event){
    const buttonPressed = event.currentTarget;
    
    const buttons = document.querySelectorAll('.button-select button');
    
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    buttonPressed.classList.add('active');

    const input = document.querySelector('[name="oppen_on_weekends"]');

    input.value = buttonPressed.dataset.value;
}