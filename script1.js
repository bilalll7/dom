// dom manipulation
//buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');

//simpan teks ke paragraf
pBaru.appendChild(teksBaru);
//simpan pbaru di section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const itemBaru = document.createTextNode('item baru');

liBaru.appendChild(itemBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'green';
h2Baru.style.backgroundColor = 'lightBlue';
liBaru.style.backgroundColor = 'lightBlue';
