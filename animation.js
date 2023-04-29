let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let eman = document.querySelector('.eman')

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5+ 'px';
    mountains4.style.top = value * 1 +'px';
    river.style.top = value +'px';
    boat.style.left = value * 1.5 +'px';
    boat.style.top = value +'px';
    eman.style.fontSize = value + 'px'
    if(scrollY >= 70){
        eman.style.fontSize = 70 + 'px';
        eman.style.position = 'fixed';
        if(scrollY >= 478){
            eman.style.display = 'none';
        }else{
            eman.style.display = 'block';
        }
    }
    if( scrollY >= 127 ){
        document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016 , #10001f)'
    }
}