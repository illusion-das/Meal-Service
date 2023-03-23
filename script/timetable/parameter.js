function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

var _Grade = getParameterByName("grade");
var _Class = getParameterByName("class");

const TitleMessage = document.getElementById('title');
TitleMessage.innerHTML = `${_Grade}학년 ${_Class}반`;