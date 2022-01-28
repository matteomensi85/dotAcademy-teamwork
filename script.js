
var image = document.getElementById('img')
var rewardBtn = document.getElementById('reward-btn')

rewardBtn.addEventListener('click', () =>{
    if(image.style.display == 'block'){
        image.style.display = 'none'
    }else{
        image.style.display = 'block'
    }

})


var myname = document.getElementById('name-input');
var mysurname = document.getElementById('surname-input');
var myemail = document.getElementById('email-input');

myname.addEventListener('change', (event) => {

    if (event.target.value.length  <= 2)
    {
        document.getElementById('name-input').style.backgroundColor = 'red';

    }
    else 
    {
        document.getElementById('name-input').style.backgroundColor = 'white';

    }

});

mysurname.addEventListener('change', (event) => {

    if (event.target.value.length <= 2)
    {
        document.getElementById('surname-input').style.backgroundColor = 'red';

    }
    else 
    {
        document.getElementById('surname-input').style.backgroundColor = 'white';

    }

});

myemail.addEventListener('change', (event) => {

    if (event.target.value.length <= 2)
    {
        document.getElementById('email-input').style.backgroundColor = 'red';

    }
    else 
    {
        document.getElementById('email-input').style.backgroundColor = 'white';

    }

});

// function validateName() {

//     var name = document.getElementById('name-input').value;
//     var surname = document.getElementById('surname-input').value;

//     if (name.length < 2)
//     {
//         document.getElementById('name-input').style.backgroundColor = 'red';

//     }
//     if (surname.length < 2)
//     {
//         document.getElementById('surname-input').style.backgroundColor = 'red';
//     }
 
// }

// function validateEmail() {

//     var email = document.getElementById('email-input').value;

//     var flag = email.includes('@');

//     if(!flag)
//     {
//         document.getElementById('email-input').style.backgroundColor = 'red';
//     }
  
 
// }

function onSubmit() 
{
    var name = document.getElementById('name-input').value;
    var surname = document.getElementById('surname-input').value;
    var email = document.getElementById('email-input').value;
    var phone = document.getElementById('phone-input').value;

    var formDB = [{}];

    formDB.push({"firstName": name, "lastName": surname, "email": email, "phone": phone});
    console.log(formDB);


}


