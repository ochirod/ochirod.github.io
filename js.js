// сделать нормальную функцию конца игры
// блокировать занятые блоки - DONE
// Поменять стиль игры, другие цвета как минимум
// добавь нормально расположение кнопок: Начать игру, рестарт
// ввод размерности поля

var N = 3;

function setValue(){
    N = document.getElementById("value").value;
    console.log('N = ' + N);
}

var game = document.getElementById("game");
game.style.width = N*50 + "px";
game.style.height = N*50 + "px";

for (var i = 0; i<N*N;i++){
    var elem = document.createElement("div");
    elem.className = "block"
    elem.style.left = i%N * 50 + "px"
    elem.style.top = parseInt(i/N) * 50 + "px"
    game.appendChild(elem);
//    document.getElementById('game').innerHTML += '<div class="block"></div>';
}

var hod = 0;

document.getElementById('game').onclick = function(event){
//    console.log(event);
    if (event.target.className == "block" && event.target.textContent == "") {
        if (hod%2 == 0) {
            event.target.innerHTML = 'X';
        }
        else {
            event.target.innerHTML = '0'
        }
        hod++;
        checkWinner();
    }
}

function checkRows(allblock, word){
    for(var i = 0; i < N; i++){
        flag = true;
        
        for(var j = 0; j < N; j++){
            if(allblock[i*N + j].innerHTML != word){
                flag = false;
                break;
            }

        }
        
        if(flag) break;
        
    }
    console.log("Rows flag: " + flag);
    return flag;
}

function checkColumn(allblock, word){
    for(var i = 0; i < N; i++){
        flag = true;
        
        for(var j = 0; j < N; j++){
            if(allblock[j*N + i].innerHTML != word){
                flag = false;
                break;
            }
        }
        
        if(flag) break;
        
    }
    console.log("Column flag: " + flag);
    return flag;
}

function cheakDiag(allblock, word){
    flag1 = true; flag2 = true
    for(var i = 1; i <= N; i++){
        
        if(allblock[i*N - i].innerHTML != word){
            flag1 = false;
        }
        if(allblock[(i-1)*(N+1)].innerHTML != word){
            flag2 = false;
        }
    }
    console.log("Diag flag: " + flag1 + " " +flag2);
    return flag1 || flag2;
}

function endGame(message){
    alert(message);
}

function checkWinner() {
    var allblock = document.getElementsByClassName('block');
    var flag1, flag2;
    
    if(checkRows(allblock, "X") || checkColumn(allblock, "X") || cheakDiag(allblock, "X")){
        endGame("X win");
    }
    
    if(checkRows(allblock, "0") || checkColumn(allblock, "0") || cheakDiag(allblock, "0")){
        endGame("0 win");
    }
    
}


document.getElementById('reset').onclick = function() {
    location.reload();
}
