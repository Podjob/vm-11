let mas=[1, 2, 4, 12, 32];
//переворот с нач до конц
for(let i=0; i < mas.length; i++) {
   if(mas.length % 2 == 0){
       
       if(mas[i] == mas[(mas.length)/2]){
           break;}
       else{
         let a = mas[i];
         mas[i] = mas[mas.length-1-i];
         mas[mas.length-1-i] = a;}
       }
   else{
    if(mas[i] != mas[(mas.length)/2]){
    let a = mas[i];
    mas[i] = mas[mas.length-1-i];
    mas[mas.length-1-i] = a;
}
   }
   alert(mas);
}
// сумма всех элементов
let sum=0;
for(let i=0; i < mas.length; i++){
   sum+=mas[i];
}
alert(sum);
// сумма отриц элем
let sum1=0;
for(let i=0; i < mas.length; i++){
    if(mas[i]/(-mas[i]) == 1)
    sum1+=mas[i];
}
alert(sum1);
// сумма полож элем
let sum2=0;
for(let i=0; i < mas.length; i++){
    if(mas[i]/(-mas[i]) == -1)
    sum2+=mas[i];
}
alert(sum2);
// в порядке возрост
let mas1=[1, 2, 32, 6, 31];
mas1.sort((a, b) => a - b)
alert(mas1);
// в порядке убыв
let mas2=[1, 2, 32, 6, 31];
mas2.sort((a, b) => b - a)
    alert(mas2);
// помен мест этот и след элем
let mas3=[1, 2, 4, 12, 32];
for(let i=0; i < mas3.length; i+=2) {
    if(mas3.length % 2 == 1){
      if(mas3[i] != mas3[mas3.length - 1]){
        let a = mas3[i];
        mas3[i] = mas3[i + 1];
        mas3[i + 1] = a; 
      }
    }
    else{
        let a = mas3[i];
        mas3[i] = mas3[i + 1];
        mas3[i + 1] = a; 
    }
    alert(mas3);
}
