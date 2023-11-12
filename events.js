//ubah warna satu kali klik
function ubahWarna() {
  p2.style.backgroundColor = 'lightgrey';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//mengklk menambah item yang baru
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const teksLiBaru = document.createTextNode('item baru');
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function () {
  p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function () {
  p3.style.backgroundColor = 'lightgreen';
});
