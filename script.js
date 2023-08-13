// Subhan Allah
const subhanallahdisplay=document.getElementById('subhanallahdisplay');
const subahallahincrement=document.getElementById('subahallahincrement');
const subahallahdecrement=document.getElementById('subahallahdecrement');


// Alhamdulillah
const alhamdullilhdisplay=document.getElementById('alhamdullilhdisplay');
const alhamdulillahincrement=document.getElementById('alhamdulillahincrement');
const alhamdulillahdecriment=document.getElementById('alhamdulillahdecriment');

// AllahHuAkber
const allahuakberdisplay=document.getElementById('allahuakberdisplay');
const allahuakberincrement=document.getElementById('allahuakberincrement');
const allahuakberdecriment=document.getElementById('allahuakberdecriment');

// Reset button
const resetbutton=document.getElementById('resetbutton');


let subhanallahdisplayp=0;
let alhamdullilhdisplayp=0;
let allahuakberdisplayp=0;

// SubahnAllah part start
// increment
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
// SubahnAllah part end

// Alhamdulillah part start
// increment
alhamdulillahincrement.addEventListener('click',function Alhamdulillah() {
    if (alhamdullilhdisplayp==33) {
        return alert('Please increment this');
    }
    alhamdullilhdisplayp+=1;
    // console.log(alhamdullilhdisplayp);
    alhamdullilhdisplay.innerText=alhamdullilhdisplayp;
})
// dicrement button
alhamdulillahdecriment.addEventListener('click',function Alhamdulillahh() {
    if (alhamdullilhdisplayp==0) {
        return alert('Please increment this');
    }
    alhamdullilhdisplayp-=1;
    //  console.log(alhamdullilhdisplayp);
     alhamdullilhdisplay.innerText=alhamdullilhdisplayp;
})
// Alhamdulillah part end

// Allhuakber part start
// increment
allahuakberincrement.addEventListener('click',function Alhamdulillah() {
    if (allahuakberdisplayp==33) {
        return alert('Please increment this');
    }
    allahuakberdisplayp+=1;
    // console.log(alhamdullilhdisplayp);
    allahuakberdisplay.innerText=allahuakberdisplayp;
})
// dicrement button
allahuakberdecriment.addEventListener('click',function Alhamdulillahh() {
    if (allahuakberdisplayp==0) {
        return alert('Please increment this');
    }
    allahuakberdisplayp-=1;
    //  console.log(alhamdullilhdisplayp);
    allahuakberdisplay.innerText=allahuakberdisplayp;
})