var urlParams = location.search.split(/[?&]/).slice(1).map(function(paramPair) {

    return paramPair.split(/=(.+)?/).slice(0, 2);

}).reduce(function(obj, pairArray) {

    obj[pairArray[0]] = pairArray[1];

    return obj;

}, {});

var _Grade = urlParams.grade;
var _Class = urlParams.sclass;

const TitleMessage = document.getElementById('title');
TitleMessage.innerHTML = `${_Grade}학년 ${_Class}반`;