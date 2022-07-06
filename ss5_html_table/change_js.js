let ebtn = document.getElementById('btnConvert')

function change() {
    const amount = document.getElementById  ("amount").value;
    const F = document.getElementById("F").value;
    const to = document.getElementById("to").value;

    let result='';

    if (F ==='Vietnam' && to ==='USD' ) {
        result ="result:"+( amount *25000)+"D"
    }
    else if (F ==='USD' && to === 'Vietnam'){
        result ="result"+(amount/25000)+ '$'
    }
    else if (F === 'Vietnam') {
        result ="result"+amount+'D'
    }
    else  {
        result ="result"+amount+'$'
    }
    document.getElementById('result').innerHTML = result

}
ebtn.addEventListener('click', change)