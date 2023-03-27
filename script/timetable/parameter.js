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

function ax(){
  var pag = getParams();

  var _Grade = pag["grade"];
  var _Class = pag['class'];
  const tm = document.getElementById('titlex');
  tm.innerHTML = _Grade + '학년 ' + _Class + '반';

  var datev = new Date();

  datx = getDayOfWeek(`${datev.getFullYear()}-${datev.getMonth() + 1}-${datev.getDate()}`);

  const indatx = document.getElementById('times' + datx);
  indatx.classList.add('toptime');

}

function getDayOfWeek(dstr){

  const week = ['0', '1', '2', '3', '4', '5', '6'];

  const dayOfWeek = week[new Date(dstr).getDay()];

  return dayOfWeek;

}