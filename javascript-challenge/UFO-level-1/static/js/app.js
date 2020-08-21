// Create a copy of the data
var ufoData = data;

// assign tbody element that we will populate with data
var $tbody = document.querySelector("tbody");

//get date input, filter and reset buttons
var $dateInput = document.querySelector("#datetime");

// actionlisteners for filter and reset buttons
document.querySelector("#filter").addEventListener("click", filterAction);
document.querySelector("#reset").addEventListener("click", resetAction);

createTable();

// Build table with non-filtered data
function createTable() {
  $tbody.innerHTML = "";
  
  var sighting, sightingKeys;
  var dom;
  var columnValue;
  
  for (var i = 0; i < ufoData.length; i++) {
    sighting = ufoData[i];
    sightingKeys = Object.keys(sighting);
	
    $dom = $tbody.insertRow(i);
	/* insert the column values:  0=date, 1=city, 2=state, 3=country, 4=shape, 5=duration, 6=comments*/	
    for (var j = 0; j < sightingKeys.length; j++) {
      columnValue = sightingKeys[j];
      $dom.insertCell(j).innerText = sighting[columnValue];
    }
  }
}

function filterAction() {
  ufoData = data;
  
  var filterDate = $dateInput.value;
  
  if (filterDate != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  }
  else { ufoData };

  createTable();
}

function resetAction(){
  createTable();
}