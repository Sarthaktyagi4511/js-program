const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height`

    }else if (weight==='' ||weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter a valid weigth`
    }
        else{
            const bmi = ( weight / ((height/100) * (height/100))).toFixed(2);

            result.innerHTML=`<span> your BMI is :${bmi}</span>`
        }

})

