// Source code derived from the 'JohnSon with JS' project.


/** GetmealZone => 현재 시간을 기반으로 하여 알맞은 급식 시간대를 반환합니다. */
const GetmealZone = (data) => {

  let mealzone = '';

  const hour = new Date().getHours();
  const isbf = data['menu'][0]['breakfast'].length !== 0;
  const islc = data['menu'][0]['lunch'].length !== 0;
  const isdr = data['menu'][0]['dinner'].length !== 0;

  if (isbf && islc && isdr) {
    mealzone = hour >= 0 && hour < 8 ? 'breakfast' : (hour >= 8 && hour < 14 ? 'lunch' : 'dinner');
  } else if (isbf && islc) {
    mealzone = hour >= 0 && hour < 8 ? 'breakfast' : 'lunch';
  } else if (islc && isdr) {
    mealzone = hour >= 0 && hour < 14 ? 'lunch' : 'dinner';
  } else {
    mealzone = islc ? 'lunch' : 'None';
  }

  return mealzone;

}

/** mealZone => 급식 정보를 파싱하여 반환합니다. */
const mealZone = (data) => {
  let mealzone = GetmealZone(data);
  result = mealzone !== 'None' ? [...data['menu'][0][mealzone]] : [''];
  return result;
};

/** Meal_Request => 파라미터에 입력 된 값을 기반으로 API에 요청하고 그 정보를 파싱하여 반환합니다. */
const Meal_Request = async (schoolType, schoolCode, date = nowdate()) => {
  const API = `https://school-api-a5575.firebaseapp.com/api/${schoolType}/${schoolCode}?year=${date[0]}&month=${date[1]}&date=${date[2]}&allergy=hidden`;
  const response = await fetch(API);
  const data = await response.json();
  const result = mealZone(data);

  MealZone_ChangeText(GetmealZone(data));

  return result;

};

/** NowDate => 오늘 날짜를 배열로 반환합니다. */
const nowdate = () => {
  return [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]
}

/** randroll => 랜덤한 메세지를 출력합니다. */
const randroll = (zone) => {
  rtr = '';
  switch(zone){
    case 'breakfast': 
      switch(randint(0, 1)){
        case 0: rtr = '피곤해도 먹고싶은'; break;
        case 1: rtr = '맨발로 안뛰고싶은'; break;
    }
    break;
    case 'lunch':
      switch(randint(0, 1)){
        case 0: rtr = '자꾸만 기다려지는'; break;
        case 1: rtr = '조과장의 점심시간인'; break;
    }
    break;
    case 'dinner':
      switch(randint(0, 1)){
        case 0: rtr = '마지막을 장식할'; break;
        case 1: rtr = '이건 규선이도 기달리는'; break;
    }
    break;
  }
  return rtr;
}

/** MealZone_ChangeText => 급식 시간대에 따라 사용자에게 표시되는 텍스트를 수정합니다. */
const MealZone_ChangeText = (mealZone) => {
  
  const subText = document.getElementById('sub_title');
  const mainText = document.getElementById('main_title');

  switch(mealZone){
    case 'breakfast':
      subText.innerHTML = randroll(mealZone);
      mainText.innerHTML = '오늘의 아침은';
      break;
    case 'lunch':
      subText.innerHTML = randroll(mealZone);
      mainText.innerHTML = '오늘의 점심은';
      break;
    case 'dinner':
      subText.innerHTML = randroll(mealZone);
      mainText.innerHTML = '오늘의 저녁은';
      break;
  }
}