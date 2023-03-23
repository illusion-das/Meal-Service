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

console.log(pag);

var _Grade = pag["grade"];
console.log(_Grade);
var _Class = pag['class'];
console.log(_Class);
const tm = document.getElementById('title');
tm.innerHTML = _Grade + '학년 ' + tm + '반';