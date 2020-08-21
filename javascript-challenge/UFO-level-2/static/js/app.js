// Create a copy of the data
var ufoData = data;

// assign tbody element that we will populate with data
var $tbody = document.querySelector("tbody");

//get date input, filter and reset buttons
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $commentInput = document.querySelector("#comment");

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
  // preferred behavior is to reset data and apply current filters rather than continue with prior filters.
	ufoData = data;

  var filterDate = $dateInput.value;
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  var filterComment = $commentInput.value.trim().toLowerCase();
  
  //alert("Size: " + ufoData.length + "\n\n\nDate: " + filterDate + "\nCity: " + filterCity + "\nState: " + filterState + "\nCountry: " + filterCountry + "\nShape: " + filterShape + "\nComment: " + filterComment)

  if (filterDate != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  }
  else { ufoData };

  if (filterCity != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingCity = sighting.city.toLowerCase();
      return sightingCity === filterCity;
    });
  }
  else { ufoData };

  if (filterState != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingState = sighting.state.toLowerCase();
      return sightingState === filterState;
    });
  }
  else { ufoData };

  if (filterCountry != "") {
	ufoData = ufoData.filter(function (sighting) {
		var sightingCountry = sighting.country.toLowerCase();
		return sightingCountry === filterCounty;
    });
  }
  else { ufoData };
  
  if (filterShape != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingShape = sighting.shape.toLowerCase();
      return sightingShape === filterShape;
    });
  }
  else { ufoData };

  if (filterComment != "") {
    ufoData = ufoData.filter(function (sighting) {
      var sightingComment = sighting.comments.toLowerCase();
      return sightingComment.includes(filterComment);
    });
  }
  else { ufoData };

  createTable();
}

function resetAction(){
  createTable();
}