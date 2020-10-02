var rooms = [
    [
        'Коридор',
        'Кароч, ты в Гриффинодоре, ура ... уху... проехали. Перед тобой три двери: столовая, аудитория, выход(армия(как? хз!)). Куда пойдешь?',
        ['встоловую', 'ваудиторию', 'хыы', 'столовая', 'аудитория', 'армия', 'военком(армия)'],
        [1, 2, 3, 1, 2, 3, 3],
        0,
        'http://dh-art.ru/besceler/gloster1.jpg'

    ], [
        'Столовая',
        'Ты поел, хочешь ещё?(стоимость еды 50 очков Гриффиндора(почему снимаются очки хз (видимо повориха зажирает их)))',
        ['да', 'нет', 'нехочу', 'хочу'],
        [1, 0, 0, 1],
        1,
        'https://2ch.hk/wr/src/621863/15391139147450.jpg'
    ], 
    [
        'Аудитория',
        'Сидя на лекциях Головизина, ты можешь многому научиться (особенно в мире чародейсва и волшебства). Останься и получи +1 к уму',
        ['да', 'нет', 'уйти'],
        [2, 0, 0],
        2,
        'https://apf.attachmail.ru/cgi-bin/readmsg?id=16016388430307054703;0;1&exif=1&full=1&x-email=strigin-artem%40mail.ru&rid=3733229423809067401818994562892788645'
    ],
    [
        'Военком(армия)',
        'Ты потерял год. Хочешь ещё?(+100 очков Гриффиндора хрен знает за что)',
        ['востановитьсявинсте','нет', 'да', 'коридор'],
        [0, 0, 3, 0],
        3,
        'https://ic.pics.livejournal.com/bb_mos/23473334/318170/318170_original.jpg'
    ]
];//локации
var step = 0;
document.getElementById('Location').innerHTML = rooms[0][0];
document.getElementById('Result').innerHTML = rooms[0][1];
var HP = 100;
var Points = 500;
var KnowLedge = 10;
var Stress = 10;
document.getElementById('ChooseFemale').addEventListener('click', ChooseFemale);
document.getElementById('ChooseMale').addEventListener('click', ChooseMale);
document.getElementById('ChoosePokemon').addEventListener('click', ChoosePokemon);
var TotalSteps = 0;
function stepTo(){
    
    if (step === null) {
        return;
    }
    var room = rooms[step];
    if (!room) {
        return;
    }
    
    var answer = document.getElementById('inp').value;
    document.getElementById('inp').value = '';
    if (!answer) {
        return;
    }
    answer = answer.toLowerCase().replace(' ', '');
    var isWayNotFound = true;
    for (var i = 0; i < room[2].length; i++) {
        if (answer === room[2][i]) {
            step = room[3][i];
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound) {
        step = room[4];
    }
    CalculateStats();
    document.getElementById('Result').innerHTML = rooms[step][1];
    printRoomInfo();
}//сама игра, где вызываются ф-и рассчёта и печати информации
function printRoomInfo(){
    if(step != null && rooms[step]){
        document.getElementById('Location').innerHTML = rooms[step][0];
    }
    var b = '';
    var room = rooms[step];
    var exits = [];
    var isNameUniq = true;
    document.getElementById('image').src = rooms[step][5];
    for(var i = 0; i < room[3].length; i++){
        var num = room[3][i];
        for(var j = 0; j < exits.length; j++){
            if(rooms[num][0] == exits[j]){
                isNameUniq = false;
            }
        }
        if(isNameUniq){
            exits.push(rooms[num][0]); 
        }        
    }
    document.getElementById('Ways').innerHTML = exits.join(', ');
}//печать информации о команате
function CalculateStats(){
    //проверка ХП и местоположениеы
    if(HP <= 5 || Stress >= 100){
        var death = document.getElementById('death');
        death.style.display = 'flex';
    } else {
        if(step != 1){
            HP -= Math.round(5 - (KnowLedge * 0.01));
            document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';
        } else if(HP <= 100 && step == 1 && Points >= 50){
            HP += Math.round(5 + (KnowLedge * 0.01));
            Points -= 50;
            document.getElementById('Points').innerHTML = 'Очки: ' + Points ;
            document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';
        }
        if(step == 2){
            KnowLedge += 1;
            Stress += 15;
            document.getElementById('KnowLedge').innerHTML = 'Level: ' + KnowLedge;
            document.getElementById('Stress').innerHTML = 'Усталость: ' + Stress + '%';
        } else {
            if(Stress >= 10){
                Stress -= 10;
            }
            document.getElementById('Stress').innerHTML = 'Усталость: ' + Stress + '%';
        }
        if(step == 3){
            Points += Math.round(99 + (KnowLedge * 0.1));
            document.getElementById('Points').innerHTML = 'Очки: ' + Points;
        }
        //вызов сессии и рассчёт шагов
        if(TotalSteps % 40 == 0 && TotalSteps > 0){
            if(KnowLedge >= 200){
                document.getElementById('SMS').style.display = 'flex';
                document.getElementById('SMS-TEXT').innerHTML = 'Вы сдали сессию(знания больше 200). Это победа Пацаны';
                Points += 1000;
                document.getElementById('Points').innerHTML = 'Очки: ' + Points;

            } else {
                document.getElementById('SMS').style.display = 'flex';
                document.getElementById('SMS-TEXT').innerHTML = 'Вы не сдали сессию(знания меньше 200). Это поражение, начни заново';
                Points -= 200;
                document.getElementById('Points').innerHTML = 'Очки: ' + Points;
                HP -= 50;
                document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';

            }
        } else {
            TotalSteps += 1;
            document.getElementById('TotalSteps').innerHTML = 'Кол-во ходов: ' + TotalSteps;
        }
        
    }   
}//рассчёт статов
function ChooseFemale(){
    document.getElementById('choose').style.display = 'none';
    HP = 80;
    Points = 800;
    KnowLedge = 15;
    Stress = 15;
    document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';
    document.getElementById('Points').innerHTML = 'Очки: ' + Points;
    document.getElementById('KnowLedge').innerHTML = 'Level: ' + KnowLedge;
    document.getElementById('Stress').innerHTML = 'Усталость: ' + Stress + '%';
}
function ChooseMale(){
    document.getElementById('choose').style.display = 'none';
    HP = 100;
    Points = 500;
    KnowLedge = 10;
    Stress = 10;
    document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';
    document.getElementById('Points').innerHTML = 'Очки: ' + Points;
    document.getElementById('KnowLedge').innerHTML = 'Level: ' + KnowLedge;
    document.getElementById('Stress').innerHTML = 'Усталость: ' + Stress + '%';
}
function ChoosePokemon(){
    document.getElementById('choose').style.display = 'none';
    HP = 600;
    Points = 1800;
    KnowLedge = 3;
    Stress = -500;
    document.getElementById('HP').innerHTML = 'Здоровье студента: ' + HP + '%';
    document.getElementById('Points').innerHTML = 'Очки: ' + Points;
    document.getElementById('KnowLedge').innerHTML = 'Level: ' + KnowLedge;
    document.getElementById('Stress').innerHTML = 'Усталость: ' + Stress + '%';
}
var btn = document.getElementById('Step');
btn.addEventListener('click', stepTo);