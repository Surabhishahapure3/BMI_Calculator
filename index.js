const buton = document.getElementById('btn');

buton.addEventListener('click',function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight==''){
        alert('Please fill out the input fields');
    }

    // BMI = weight in KG / (height in m *height in m)

    height = height / 100;

    let BMI = (weight / (height * height));
    // console.log(BMI);
    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;
})