const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const EmojiRandom = () => {
    switch(randint(0, 5)) {
        case 0: return '🍙'
        case 1: return '🍛'
        case 2: return '🍚'
        case 3: return '🍜'
        case 4: return '🍱'
        case 5: return '🍕'
    }
}

const MsgRandom = () => {
    switch(randint(0, 5)) {
        case 0: return '열심히 급식표를<br>읽고있는 중'
        case 1: return '오늘 급식을<br>수소문 하는 중'
        case 2: return '급식 아주머니에게<br>물어보는 중'
        case 3: return '인터넷으로<br>검색하는 중'
        case 4: return '다른 반 급식표<br>빼돌리는 중'
        case 5: return '데이터베이스<br>뜯어보는 중'
    }
}

const PageRefrash = (emoji, message, iscreate) => {
    const Class_Emoji = document.getElementById(emoji);
    const Class_Message = document.getElementById(message);
    if(iscreate){
        Class_Emoji.innerHTML = EmojiRandom();
        Class_Message.innerHTML = MsgRandom();
    }else{
        const loadui = document.querySelector('.loadui');
        loadui.classList.add('playanimated_sizeup');
        sleep(400);
        Class_Emoji.remove();
        Class_Message.remove();
    }
    return 1
}