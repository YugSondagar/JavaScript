const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);  this will return empty value thats why we are using it inside the form event handler

form.addEventListener('submit',(e)=>{
    e.preventDefault();   // jo bhi default event hai get,post vagera usko roko
    const height = parseInt(document.querySelector('#height').value); // parseInt because .value returns value in string format
    const weight = parseInt(document.querySelector('#weight').value); 
    const results = document.querySelector('#results'); 

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        let message = `<span>Your BMI is ${BMI} and you are `;

        if (BMI < 18.5) {
            message += `Underweight 😟</span>`;
        } else if (BMI >= 18.5 && BMI < 24.9) {
            message += `Normal weight 🙂</span>`;
        } else {
            message += `Overweight 😕</span>`;
        }

        results.innerHTML = message;
    }
})