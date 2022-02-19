const multiline = 'This is my first line.\n' + ' This is my seound line.\n' +' This is my third line'


const friends = ['pranto', 'maruf ali', 'roni', 'rana']
const count = 5;
const old = '<h3 class="friend-name">  Friend-5</h3>'
// const old = '<h3 class="friend-name">  Friend' + count + '</h3>'
const new1 = `<h3 class="friend-name">  Friend-${count}</h3>`
const friendName = `<h3 class="friend-name">  Friend-${friends.length}</h3>`



const first = 'Partho';
const last = 'Malo'
const fullOld = first + ' ' + last;
const fullNew = `${first} ${last}`
console.log(fullNew)