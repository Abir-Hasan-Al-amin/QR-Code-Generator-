const qrImage=document.getElementById("q-img");
const button =document.getElementById("button");
const text =document.getElementById("text");
const img =document.querySelector(".img");
let value="";
button.addEventListener('click',()=>{
    value = text.value.trim();
    if(value === ""){
        text.classList.add('empty');
        setTimeout(() => {
            text.classList.remove('empty');
        }, 1000);
    }else{
        qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        img.classList.add('active');
    }
});
text.addEventListener('input', () => {
    const value1 = text.value.trim();
    if (!(value1 === value)) {
        qrImage.src = "";
        img.classList.remove('active');
    }
});
