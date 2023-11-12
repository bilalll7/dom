//Dom selection
//getElemetById
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Albilal Bintang Iskandar';

//getElementsByTagName
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightgrey';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//getElementsByClassName
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini Diubah Oleh javaScript';

//queryselector
const p2 = document.querySelector('.p2');
