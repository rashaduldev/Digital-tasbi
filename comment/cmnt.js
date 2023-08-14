const btnclick=document.getElementById('btnclick');
const textcontainer=document.getElementById('textcontainer');
const commentText=document.getElementById('commentText');

btnclick.addEventListener('click',function comment() {
    // console.log('button is clicked');
    const newC=commentText.value;
   
    console.log(newC);
    // commentText='';
    // step3
    const p=document.createElement('p');
    p.innerText=newC;
    textcontainer.appendChild(p);
})
