var xhr = new XMLHttpRequest();
xhr.open("get", "./rockbands.json");
xhr.send();
let seleBands = document.getElementById("0");
let seleArtists = document.getElementById("1");
xhr.addEventListener("load", () => {
  let data = JSON.parse(xhr.response);
  // Create option elements for Band select
  for (let band in data)
  {
    let newOption = document.createElement("option");
    newOption.setAttribute("value", band);
    let textOption = document.createTextNode(band.toUpperCase());
    newOption.appendChild(textOption);
    seleBands.appendChild(newOption);
  }
  seleBands.addEventListener("change", function(sele){
    if (seleArtists.length !== 1)
      location.reload();
    let index = sele.target.selectedIndex;
    let optionName = sele.target.options[index];
    let artistsAll = data[optionName.value];
    // Create option elements for Artist select
    for (artist of artistsAll)
    {
      let newOption = document.createElement("option");
      newOption.setAttribute("value", artist.value);
      newOption.textContent = artist.name.toUpperCase();
      seleArtists.add(newOption);
    }
    // Replace location for artist website
    seleArtists.addEventListener("change", function (e){
      location.assign(e.target.options[e.target.selectedIndex].value);
    })
  });
})
