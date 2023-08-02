let element1 = document.getElementById('images-1');
let element2 = document.getElementById('images-2');
let element3 = document.getElementById('images-3');
let element4 = document.getElementById('images-4');


function change_size(element){
    let ima = element.getElementsByClassName('img');
    let info = element.getElementsByClassName('info-p');
    element.style.backgroundColor= 'white';  
    element.style.width= '400px';
    element.style.height= '400px';
    ima[0].style.width= '400px';
    ima[0].style.height= '200px';
    ima[0].style.transition='3s';
    ima[0].style.borderRadius= '0px';
    //document.body.style.backgroundColor='black';
    element.style.transition='6s';
    element.style.marginLeft= '50px';
    info[0].style.visibility='visible';
    info[0].style.transition='3s';
    element.style.zIndex = '5';
    

}
function return_size(element){
    let ima = element.getElementsByClassName('img');
    let info = element.getElementsByClassName('info-p');
    element.style.width= '400px';
    element.style.height= '300px';
    ima[0].style.width= '300px';
    ima[0].style.height= '200px';
    ima[0].style.transition='2s';
    element.style.backgroundColor='rgba(188, 234, 219, 0.237)';
    element.style.transition='2s';
    document.body.style.backgroundColor='white';
    element.style.marginLeft= '0%';
    ima[0].style.borderRadius= '700px';
    info[0].style.visibility='hidden';
    info[0].style.transition='1s';
    element.style.zIndex = '1';
}

element1.onmouseover= function(){
    change_size(element1);
};
element1.onmouseout= function(){
    return_size(element1);
};
element2.onmouseover= function(){
    change_size(element2);
};
element2.onmouseout= function(){
    return_size(element2);
};
element3.onmouseover= function(){
    change_size(element3);
};
element3.onmouseout= function(){
    return_size(element3);
};
element4.onmouseover= function(){
    change_size(element4);
};
element4.onmouseout= function(){
    return_size(element4);
};
