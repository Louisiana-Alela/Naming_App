const akanNames = [
    {
        gender:'Male',
        dayOfBirth: 'Sunday',
        name:'Kwasi'
    }, {
        gender:'Male',
        dayOfBirth: 'Monday',
        name:'Kwado'
    },
    {
        gender:'Male',
        dayOfBirth: 'Tuesday',
        name:'Kwabena'
    },
    {
        gender:'Male',
        dayOfBirth: 'Wednesday',
        name:'Kwaku'
    },
    {
        gender:'Male',
        dayOfBirth: 'Thursday',
        name:'Yaw'
    },
    {
        gender:'Male',
        dayOfBirth: 'Friday',
        name:'Kofi'
    },
    {
        gender:'Male',
        dayOfBirth: 'Saturday',
        name:'Kwame'
    },


    {
        gender:'Female',
        dayOfBirth: 'Sunday',
        name:'Akosua'
    }, {
        gender:'Female',
        dayOfBirth: 'Monday',
        name:'Adwoa'
    },
    {
        gender:'Female',
        dayOfBirth: 'Tuesday',
        name:'Abenaa'
    },
    {
        gender:'Female',
        dayOfBirth: 'Wednesday',
        name:'Akua'
    },
    {
        gender:'Female',
        dayOfBirth: 'Thursday',
        name:'Yaa'
    },{
        gender:'Female',
        dayOfBirth: 'Friday',
        name:'Afua'
    },{
        gender:'Female',
        dayOfBirth: 'Saturday',
        name:'Ama'
    }
];

const akan = document.getElementById('akan');
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calcBtn = document.getElementById('calcButton');
const akanName = document.getElementById('akanName');

function calculateDayOfBirth(birthDate, gender){

    const dateOfBirth = new Date(birthDate);
    const dayOfTheWeek = dateOfBirth.getDay();

    const dayOfBirth = daysOfTheWeek[dayOfTheWeek];

    return akanNames.find(function(akan){
        return akan.dayOfBirth == dayOfBirth && akan.gender== gender;
    });

}

calcBtn.addEventListener('click', function(){
    const akan = calculateDayOfBirth(akan.date.value, akan.gender.value );
    akanName.innerHTML = akan.name;
    // alert(akan.name);
})
