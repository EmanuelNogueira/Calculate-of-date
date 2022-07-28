// Entrará a data que o usuário irá digitar      
let departureDateEntry = prompt("Digite a data da partida (Formato DD/MM/YYYY)")

// Irá converter a string que o usuário digitou(data) para de fato uma data mesmo.
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

// Apenas o "moment" atribuída significa a data atual, ou seja, o dia atual.
// Portanto o "today" estará com a data atual atribuida.
let today = moment()

// Estaremos subtraindo ambas datas para termos o resultado.
let dateDiff = today - departureDate

/*
 logo abaixo estaremos pedindo ao usuário que faça uma escolha em como ele irá querer essa conversão, se será em dias, horas, minutos ou segundos.

    !!! ATENÇÃO A ESSA INFORMAÇÃO !!!!

Apesar de já termos o valor, ele estará em milisegundos, sendo assim para se ter uma conversão teremos que dividir os valores de acordo ao que o usuário escolher.*/
let chosenOption = prompt("Escolha como você gostaria de mostrar o tempo total desde a partida : \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias")


// Estaremos estrando em uma estrutura de condição pois o usuário deverá escolher qual conversão será feita. 
if (chosenOption == "1") {

    // Para coverter os milisegundos em segundos, teremos que dividí-lo por 1000.
    // O "Math.round" já é uma biblioteca do próprio javascript, que tem sua função de pegar valores quebrados e retorná-los em valores inteiros.
    let secondsofDeparture = Math.round(dateDiff / 1000);

    // Logo estaremos retornando ao usuário o resultado da divisão, caso ele tenha escolhido a conversão em segundos.
    alert ("Tempo de vôo: " + secondsofDeparture + " segundos.");


} else if (chosenOption == "2") {

    // O mesmo acoontece com os minutos, que após converter em segundos, estará convertendo em minutos.
    let minutesofDeparture = Math.round(dateDiff / 1000 / 60);

    // Retorno ao cliente do resultado. 
    alert ("Tempo de vôo: "+ minutesofDeparture + " minutos.");


} else if (chosenOption == "3") {

    // Logo, a conversão me horas segue o mesmo padrão, após a conversão em segundos, estaremos convertendo em minutos e logo depois em horas.
    let hoursofDeparture = Math.round(dateDiff / 1000 / 60 / 60);

    // Retorno ao cliente do resultado. 
    alert ("Tempo de vôo: "+ hoursofDeparture + " horas.");


} else if (chosenOption == "4") {

    // O padrão segue sendo feito, após a conversão em segundos, estaremos convertendo em minutos, depois em horas e logo depois em dias.
    let daysofDeparture = Math.round(dateDiff / 1000 / 3600 / 24);

    // // Retorno ao cliente do resultado. 
    alert ("Tempo de vôo: "+ daysofDeparture + " dias. ");
} else {

    // Retorno ao cliente caso ele digite algum valor errado.
    alert (" Valor inválido! ");
}