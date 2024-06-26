const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');



inputs.forEach(element => {
    element.addEventListener('input',checkValidInput)
});

function checkValidInput(){
    if(this.value.length == 0 ){
        this.style.borderColor = 'DC143c';
        this.style.outline = 'none';
    }
    else if(this.value.length > 0) {
        this.style.borderColor = 'green';
        this.style.outline = 'none';
    }
}



document.forms[0].onsubmit = function (e){
    inputs.forEach((input)=>{
        if(input.value.length == 0){
            e.preventDefault();
            if(input.nextElementSibling == null){
                let p = document.createElement('p');
                p.innerHTML = 'Please fill this fields';
                p.classList.add('warning');
                input.parentElement.appendChild(p);
                input.style.borderColor = 'red';
                
        this.style.outline = 'none';
            }
        }
    })
}