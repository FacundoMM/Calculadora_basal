let boton = document.getElementById('boton');
let error = document.getElementById('error');
let flu = document.getElementById('flu');
let man = document.getElementById('man');
let dato = document.getElementById('peso');


boton.addEventListener("click", condicion);

function superficieCorporal(){
    let peso = dato.value * 1;
    return (((peso *4)+7)/(peso+900));
}

function condicion(){
    if (dato.value === ""){
        error.style.display = "block";
    }else {
        error.style.display = "none";
    }
    let peso = dato.value * 1;
    let vol = 0;
    if (peso<=10){
        vol = peso * 100;

    }else if (peso <= 20){
        vol = (10 * 100) + (peso-10)*50;

    }else if(peso <30){
        vol = (10 * 100) + (10*50) + (peso-20)*20;

    }else{
        vol= superficieCorporal() *1500;
        
    }
    let mante = vol / 24;
    let mante2 = mante * 1.5;
    flu.innerHTML = (` ${mante} cc/h`); 
    man.innerHTML = (`${mante2} cc/h`);
    
    man.style.display = "block";
    flu.style.display = "block"; 
}

