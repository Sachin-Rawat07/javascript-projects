const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=document.querySelector('#height').value;
    const weight=document.querySelector('#weight').value;
    const result=document.querySelector('#results');

    if(height <0 || height ==='' || isNaN(height)){
        result.innerHTML(`please enter the valid height ${height}` );
    }
    else if(weight <0 || weight ==='' || isNaN(weight)){
        result.innerHTML(`please enter the valid weight ${weight}` );
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);

        if(bmi<18.6){
        result.innerHTML=`<span>${bmi} , Under weight</span>`

        }
        if(bmi>=18.6  && bmi<=24.9){
            result.innerHTML=`<span>${bmi} , Normal weight</span>`
    
        }
        if(bmi>24.9){
            result.innerHTML=`<span>${bmi} , Over weight </span>`
        
        }
    }


})