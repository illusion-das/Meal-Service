function getParams(){
    var url = window.location.search.replace('?','');
    var params = {};
    var urlArray = url.split('&');

    for(var i in urlArray)
    {
      var param = urlArray[i].split('=');
      params[param[0]] = param[1]; 
    }
    return params;
}

var pag = getParams();

var _Grade = pag['grade'];
// var _Class = pag['class'];

const TitleMessage = document.getElementById('title');
TitleMessage.innerHTML = `${_Grade}학년 0반`;

