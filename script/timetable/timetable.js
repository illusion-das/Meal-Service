async function getTimetable(grade, classNum) {
    const url = `https://open.neis.go.kr/hub/hisTimetable?KEY=fd28d46dcb2c4e1aa9563d4d593a748d&Type=json&ATPT_OFCDC_SC_CODE=N10&SD_SCHUL_CODE=8140472&GRADE=${grade}&CLASS_NM=${classNum}&AY=2023`;
    const response = await fetch(url);
    const data = await response.json();
    
    const timetable = data.hisTimetable[1].row;
    console.log(timetable);
    return timetable;
  }
  
getTimetable(2, 2);