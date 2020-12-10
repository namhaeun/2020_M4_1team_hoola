window.onload = function () {
  var width = 0;
  height = 0;
  speed = 0;

  function get_argument(arg) {
    if (document.getElementById(arg).style.backgroundColor == 'red') {
      document.getElementById(arg).style.backgroundColor = 'green';
    } else if (document.getElementById(arg).style.backgroundColor == 'green') {
      document.getElementById(arg).style.backgroundColor = 'yellow';
    } else {
      document.getElementById(arg).style.backgroundColor = 'red';
    };
  }

  document.getElementById('버튼50').addEventListener('click', function () {
    speed = 50
    get_argument('box2');
  });

  document.getElementById('버튼100').addEventListener('click', function () {
    speed = 100
    get_argument('box2');
  });

  document.getElementById('버튼200').addEventListener('click', function () {
    speed = 200
    get_argument('box2');
  });

  document.getElementById('btn1').addEventListener('click', function () {
    // if (parseInt(document.getElementById('box').style.left) < parseInt('1000px')) {
    {
      width = width + speed
      document.getElementById('box').style.left = width + 'px'
      get_argument('box');
    }
  });

  document.getElementById('btn2').addEventListener('click', function () {
    if (document.getElementById('box').style.left > '0px') {
      width = width - speed
      document.getElementById('box').style.left = width + 'px'
      get_argument('box');
    }
  });

  document.getElementById('btn3').addEventListener('click', function () {
    if (document.getElementById('box').style.top < '550px') {
      height = height + speed
      document.getElementById('box').style.top = height + 'px'
      get_argument('box');
    }
  });

  document.getElementById('btn4').addEventListener('click', function () {
    if (document.getElementById('box').style.top > '0px') {
      height = height - speed
      document.getElementById('box').style.top = height + 'px'
      get_argument('box');
    }
  });

  document.getElementById('color').addEventListener('click', function () {
    if (document.getElementById('box').style.backgroundColor == 'red') {
      document.getElementById('box').style.backgroundColor = 'green';
    } else if (document.getElementById('box').style.backgroundColor == 'green') {
      document.getElementById('box').style.backgroundColor = 'yellow';
    } else {
      document.getElementById('box').style.backgroundColor = 'red';
    }
  });
}