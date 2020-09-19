var rooms= [
   [
      'коридор',
      'Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?',
      ['налево','да','направо','нет'],
      [1,1,1,3],
      null
    ],[
       'столовка',
       'Ты обожрался. Хочешь ещё или пойдёшь учиться?',
       ['да','нет','хочуучиться!','меняотравили'],
       [1,1,0,3],
       1
      ],
        [
           'ад',
           'Ты слишком умный, тебе здесь делать нечего!',
           ['ок','нет'],
           [0,2],
           4
         ], [
            'туалет',
            'Туалет платный. Цена: 600 руб',
            ['плачу','нет'],
            [2,0],
            0
          ] ,[
             'армия',
             'Поздравляю!!!',
             ['Отмотать время','вернуться в туалет'],
             [0,3],
             0]
   ];
var step= 0;
while(1) {
   if (step === null) {
      break;
   }
   var room= rooms[step];
   if (!room) {
      break;
   }
   var answer = prompt(room[1]);
   if (!answer) {
      continue;
   }
   answer= answer.toLowerCase().replace(' ',''); 
   var IsWayNotFound = true;
   for(var i = 0; i < room[2].length; i++) {
      if (answer === room[2][i]) {
         step = room[3][i];
         IsWayNotFound = false;
         break;
      }
   }
   if (IsWayNotFound) {
      step = room[4];
   }
}




   /*switch (step){
      case 0:    
    answer= prompt('Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?')
    answer= answer.toLowerCase().replace(' ','');   
   switch (answer){
      case ('налево'): 
      case ('да'): 
         step=1 ; break;
      case ('направо'): step = 2; break;
      case ('нет'): step=4;  break;
      default: 
              alert('Ты остался на месте'); 
              step=null; 
              break;
    }
    break;
 case 1:
   answer= prompt('Ты обожрался. Хочешь ещё или пойдёшь учиться?')
   answer= answer.toLowerCase().replace(' ','');
   switch (answer){
    case ('да'):
   case ('нет'):
         step =1; break;
   case ('хочуучиться!'):
         step =0; break;
   case ('меняотравили'):
         step =3; break;
   default: 
         step=1; break;    
   }
   break;
   case 2:
   answer=prompt('Ты слишком умный, тебе здесь делать нечего!') 
   answer= answer.toLowerCase().replace(' ','');
   switch(answer){
      case('ок'):
      step=0; break;
      case ('нет'):
         step=2; break;
         default:
            alert('Ты конченный!!!!')
            step=4; break;
   }
   break;
   case 3:
      answer=prompt('Туалет платный. Цена: 600 руб') 
      answer= answer.toLowerCase().replace(' ','');
      switch(answer){
         case('плачу'):
         step=2; break;
         case ('нет'):
            step=0; break;
            
            default:
               alert('Ты конченный!!!!')
               step=4; break;
}
*/
