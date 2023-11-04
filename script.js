
window.onload = function(){
    for(var i = 1;i < 30;i++){
        creatItem()
    }
}

window.onscroll = function(){
    if(fScrollTop()){
        creatItem()
    }
}

function creatItem(){
    var container = document.getElementById('mansonry');
    var OItem = document.createElement('div');
    OItem.className = 'item';
    var Oimg = document.createElement('img');
    var imgsrc = `img/out/${randomNum()}.webp`;
    Oimg.loading = "lazy";
    Oimg.src = imgsrc;
    
    // <div class="item"><img src="img/img(N).jpg" alt=""></div>
    container.appendChild(OItem);
    OItem.appendChild(Oimg);
}

function randomNum(){
    var random1 = Math.floor(Math.random()*241) + 1;
    return random1;
}

function fScrollTop(){
    var item = document.getElementsByClassName('item');
    var lastItem = item[item.length - 1];
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop;

    if (lastItem.offsetTop < (clientHeight + scrollTop)){
        return true;
    }else{
        return false;
    }
}