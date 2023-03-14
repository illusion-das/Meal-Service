const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let savemoji = '';
let letmoji = '';

const EmojiRandom = () => {
    switch(randint(0, 9)) {
        case 0: savemoji = '🍙'; break;
        case 1: savemoji = '🍛'; break;
        case 2: savemoji = '🍚'; break;
        case 3: savemoji = '🍜'; break;
        case 4: savemoji = '🍱'; break;
        case 5: savemoji = '🍕'; break;
        case 6: savemoji = '🥣'; break;
        case 7: savemoji = '🍖'; break;
        case 8: savemoji = '🥪'; break;
        case 9: savemoji = '🥘'; break;
    }
    if(savemoji == letmoji){
        letmoji = savemoji;
        return EmojiRandom();
    }else{
        letmoji = savemoji;
        return savemoji;
    }
}

const MsgRandom = () => {
    switch(randint(0, 6)) {
        case 0: return '열심히 급식표를<br>읽고있는 중'
        case 1: return '오늘 급식을<br>수소문 하는 중'
        case 2: return '급식 아주머니에게<br>물어보는 중'
        case 3: return '인터넷으로<br>검색하는 중'
        case 4: return '다른 반 급식표<br>빼돌리는 중'
        case 5: return '데이터베이스<br>뜯어보는 중'
        case 6: return '조과장에게<br>여쭤보는 중'
    }
}

const PageRefrash = (emoji, message, iscreate) => {
    const Class_Emoji = document.getElementById(emoji);
    const Class_Message = document.getElementById(message);
    if(iscreate){
        Class_Emoji.innerHTML = EmojiRandom();
        let msg = MsgRandom();
        let counter = 0;
        let dot = '';
        Class_Message.innerHTML = msg;
        setInterval(
            function(){
                Class_Emoji.classList.add('playanimeted_logo');
                Class_Emoji.innerHTML = EmojiRandom();
                counter++;
                switch(counter){
                    case 1: dot = '.'; break;
                    case 2: dot = '..'; break;
                    case 3: dot = '...'; break;
                    case 4: dot = ''; counter = 0; break;
                }
                Class_Message.innerHTML = msg + dot;

                setTimeout(function(){
                    Class_Emoji.classList.remove('playanimeted_logo');
                }, 250);
            }
        , 750);
    }else{
        const loadui = document.querySelector('.loadui');
        loadui.classList.add('playanimated_sizeup');
        sleep(400);
        Class_Emoji.remove();
        Class_Message.remove();
    }
    return 1
}