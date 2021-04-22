function changeProductList(type,element){
    let e = document.getElementsByClassName('tab-item');
    for (let index = 0; index < e.length; index++) {
        e[index].style.background='aqua';
    }
    element.style.background='brown';
    switch(type){
        case'trend':
            document.getElementById('trend').style.display='block';
            document.getElementById('new').style.display='none';
            document.getElementById('best-sell').style.display='none';
            break;
        case'new':
            document.getElementById('new').style.display='block';
            document.getElementById('trend').style.display='none';
            document.getElementById('best-sell').style.display='none';
            break;  
        case'best-sell':
            document.getElementById('best-sell').style.display='block';
            document.getElementById('new').style.display='none';
            document.getElementById('trend').style.display='none';
            break; 
    }
}