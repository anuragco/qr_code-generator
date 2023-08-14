let qrdisplay = document.getElementById('qrdisplay');
let qrimage = document.getElementById('qrimage');
let inputfield = document.getElementById('input');
const btn = document.getElementById('btn');


function generateqr() {
    if(inputfield.value.length > 0) {
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputfield.value;
    qrdisplay.classList.add('show-img');

      }else{
        inputfield.classList.add('error');
        setTimeout(() =>{
            inputfield.classList.remove('error');
        }, 1000)
      }
}

btn.addEventListener('click',generateqr);