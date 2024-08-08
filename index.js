const btn1 = document.getElementById("btn");
const birthday1 = document.getElementById("birthday");
const result1 = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthday1.value;
    if(birthdayValue === ""){
        alert("Iltimos, Tug'ilgan sanangizni kiriting!");
    }else{
        const age = getAge(birthdayValue);
        result1.innerText = `Siz ${age} ${age > 1 ? "yoshdasiz" : "yosh"} `;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month =  currentDate.getMonth() - birthdayDate.getMonth();

    if(
        month < 0 || 
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ){
        age--;
    }

    return age;
}

btn1.addEventListener("click", calculateAge);
