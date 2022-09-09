

let showScript = document.querySelector('.show-script p') ;
let input = document.querySelector('.input-script textarea') ;
let buttonPrint = document.querySelector('.input-script button') ;
let selectMark = document.querySelector('.select-mark') ;
let timer = document.querySelector('.timer') ;
let count = 60 ;
// Get On Locale Storge
let data = {
    timeDown: 3500 ,
    timeStart: 5000 ,
} ;

if (window.localStorage.getItem('Data')) {
    data = JSON.parse(window.localStorage.getItem('Data')) ;
}


input.onblur = function () {
    printText() ;
} ;


buttonPrint.addEventListener('click', () => {
    printText() ;
}) ;    


function printText () {
    showScript.innerHTML = '' ;
    showScript.innerHTML = input.value ;
    count = 10 ;
    
    let timerCount = setInterval(() => {
        timer.innerHTML++ ;
        if (timer.innerHTML == '5') {
            timer.style.display = 'none' ;
        }
        
    }, 1000);
    
    setTimeout(() => {
        downMark(count) ;
    }, data.timeStart);
}


function downMark (count) {
    setInterval(() => {
        selectMark.style.top = `${count}px` ;
        count += 50 ;      
        window.scrollTo(0, count - 150); 
    }, data.timeDown);
}


// Settings App On Page




let showDown = document.getElementById('time-down') ;
let timeStart = document.getElementById('time-starting') ;
let saveSettings = document.getElementById('save-settings') ;

saveSettings.addEventListener('click', () => {
    data.timeDown = `${showDown.value}` ;
    data.timeStart = `${timeStart.value}` ;
    addDataOnLocaleStorge(data) ;
}) ;


function addDataOnLocaleStorge () {
    window.localStorage.setItem('Data', JSON.stringify(data)) ;
} ;



