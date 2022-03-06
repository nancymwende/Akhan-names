// declare variable
// jquery to access/add in html
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// create functions..momth..year..day
function dayOfWeek(century,year,month,date){
    let cc,yy,mm,dd;
    cc = century;
    yy = year;
    mm = month;
    dd = date;
    let value = Math.trunc((cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7);
    return value;
    
}

$(document).ready(function(){
    $("form#akan").submit(function(e){
        e.preventDefault()
        let calendar = $("#date").val()
        let gender = $('input[name="gender"]:checked').val();
        let dateOfBirth = calendar;
        let century = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        let year = parseInt(dateOfBirth[2].concat(dateOfBirth[3]));
        let month = parseInt(dateOfBirth[5].concat(dateOfBirth[6]));
        let date = parseInt(dateOfBirth[8].concat(dateOfBirth[9]));
        let day = dayOfWeek(century, year, month, date);
        if (gender == "male"){
            alert("Your Akan name is " + male[day -1])
        }
        else{
            alert("Your Akan name is " + female[day -1])
        } 
    })

})
