let balance = document.getElementById("balance");
let get = document.getElementById("get");
let upgrade = document.getElementById("upgrade");
let cash = document.getElementById("cash");
let click = document.getElementById("click");
let workers = document.getElementById("workers");
gotowka = 0;
ulepszenie = 0;
poprzednieDzialanie = 0;
workersChecked = false;



click.addEventListener("click", e=>{
    cash.innerHTML = gotowka + 1 + ulepszenie + "$";
    gotowka = parseInt(cash.innerHTML);
});

get.addEventListener("click", e=>{ 
    poprzednieDzialanie = parseInt(balance.innerHTML);
    balance.innerHTML = poprzednieDzialanie + gotowka;
    gotowka = 0;
    cash.innerHTML = "0$";
});

upgrade.addEventListener("click", e=>{
    ulepszenie++;
});

workers.addEventListener("click", e=>{
    workersChecked = true;
    workers.style.backgroundImage = "url(pictures/people2.png)";
    
});

function liczenie(){
    if(workersChecked == true){
    gotowka+= ulepszenie + 1;
    cash.innerHTML = gotowka + "$";
    setTimeout("liczenie()",1000);
    }
    if(workersChecked == false){
        setTimeout("liczenie()",1000);
    }

    
}


window.addEventListener('load', liczenie, false);