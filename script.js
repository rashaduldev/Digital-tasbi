// Subhan Allah
const subhanallahdisplay=document.getElementById('subhanallahdisplay');
const subahallahincrement=document.getElementById('subahallahincrement');
const subahallahdecrement=document.getElementById('subahallahdecrement');


// Alhamdulillah
const alhamdullilhdisplay=document.getElementById('alhamdullilhdisplay');
const Alhamdulillahincrement=document.getElementById('Alhamdulillahincrement');
const Alhamdulillahdecriment=document.getElementById('Alhamdulillahdecriment');

// AllahHuAkber
const allahuakberdisplay=document.getElementById('allahuakberdisplay');
const allahuakberincrement=document.getElementById('allahuakberincrement');
const allahuakberdecriment=document.getElementById('allahuakberdecriment');

// Reset button
const resetbutton=document.getElementById('resetbutton');


let subhanallahdisplayp=0;
let alhamdullilhdisplayp=0;
let allahuakberdisplayp=0;



subahallahincrement.addEventListener('click',function nam() {
    if (subhanallahdisplayp==33) {
        return alert('Please filup another');
    }
    subhanallahdisplayp+=1;
    subhanallahdisplay.innerText=subhanallahdisplayp;
})
// dicrement button
subahallahdecrement.addEventListener('click',function nam() {
    if (subhanallahdisplayp==0) {
        return alert('Please increment this');
    }
    subhanallahdisplayp-=1;
    subhanallahdisplay.innerText=subhanallahdisplayp;
})
