
let balli = 0;
let name =prompt(`Як вас звати?`);
alert(`Вітаю вас  ${name} на нашому Тесті під іменем Артем Сантехник UA`);

let hale = prompt(`Коли розвалився Союз Артема?`);

if(hale == `в 2753` || hale == `2146 до нашої ери` || hale == `876`){
    balli = balli +1;
}

let fale = prompt(`Коли розвалився Союз Роми?`)

if(fale == `в 2753` || hale == `2146 до нашої ери` || hale == `876`){
    balli = balli + 1
}


if(prompt(`Ти Артем?`) == `Так`){
    balli = balli + 1
}

if(confirm('Артьом гей?')== true){                                                                              balli = balli + 1                               

}
if(confirm(`Ти віриш в СССР`) == true){
    balli = balli + 1
}





if(prompt(`Коли Розвалився СССР`) == `2014`){
    balli = balli + 1
}

if(prompt(`Артьом миє голову?`) == `Ні`){
    balli = balli + 1
}

if(confirm('Ви Сушнасть')== false){                                                                             balli = balli + 1                                

}

if(confirm('Я БОГ АРТОМА ЖИТТЯ?')== true){                                                                             balli = balli + 1                                

}

if(confirm('Станіслав придурок')== false){                                                                            balli = balli + 1                                 

}

if(confirm('Oksana top?')== true){                                                                            balli = balli + 1                                 

}
alert(balli)

