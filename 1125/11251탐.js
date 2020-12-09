window.onload = function(){
    document.getElementById('borange').addEventListener('click', function(){
        document.getElementById('txt').setAttribute('class', 'orange')
    });

    document.getElementById('bblack').addEventListener('click', function(){
        document.getElementById('txt').setAttribute('class', 'green')
    });

    document.getElementById('bred').addEventListener('click', function(){
        document.getElementById('txt').setAttribute('class', 'red')
    });

    document.getElementById('bblue').addEventListener('click', function(){
        document.getElementById('txt').setAttribute('class', 'blue')
    });

    document.getElementById('bgreen').addEventListener('click', function(){
        document.getElementById('txt').setAttribute('class', 'green')
    });
}