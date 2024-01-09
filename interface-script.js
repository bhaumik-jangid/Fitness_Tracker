var Username=null;
var email=null;
var password=null;
var age=-1
document.addEventListener('DOMContentLoaded', function () {
    const navbarIcon = document.getElementById('navbar-icon');
    const navbarLinks = document.getElementById('navbar-links');
  
    navbarIcon.addEventListener('click', function () {
      navbarLinks.classList.toggle('show');
    });
  });

var homeDiv = document.querySelector('.home');
var workoutDiv = document.querySelector('.workout');
var nutritionDiv = document.querySelector('.nutrition');
var accountDiv = document.querySelector('.account');
document.addEventListener('DOMContentLoaded', function () {
    // Function to execute when the page loads
    showContent('home');
});
  function showContent(contentType) {
    // Hide all content divs initially
    var homeDiv = document.querySelector('.home');
    var workoutDiv = document.querySelector('.workout');
    var nutritionDiv = document.querySelector('.nutrition');
    var accountDiv = document.querySelector('.account');

    homeDiv.style.display = 'none';
    workoutDiv.style.display = 'none';
    nutritionDiv.style.display = 'none';
    accountDiv.style.display = 'none';

    // Show the selected content div
    switch (contentType) {
        case 'home':
            homeDiv.style.display = 'block';
            break;
        case 'workout':
            workoutDiv.style.display = 'block';
            break;
        case 'nutrition':
            nutritionDiv.style.display = 'block';
            break;
        case 'account':
            accountDiv.style.display = 'block';
            break;
        default:
            break;
    }
}

    //
document.addEventListener('DOMContentLoaded', function () {
    const workoutContainers = document.querySelectorAll('.workout-container');
     
    if (parseInt(age)>= 0 && parseint(age) <= 18) {
        showWorkoutSection(workoutContainers[0]);
        hideWorkoutSections([workoutContainers[1], workoutContainers[2]]);
    } else if (parseint(age) > 18 && parseint(age) <= 50) {
        showWorkoutSection(workoutContainers[1]);
        hideWorkoutSections([workoutContainers[0], workoutContainers[2]]);
    } else if (parseint(age) > 50) {
        showWorkoutSection(workoutContainers[2]);
        hideWorkoutSections([workoutContainers[0], workoutContainers[1]]);
    } else {
        showWorkoutSections(workoutContainers);
    }
});
function showWorkoutSection(section) {
    section.style.display = 'block';
}
function hideWorkoutSections(sections) {
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
}
function showWorkoutSections(sections) {
    sections.forEach(function (section) {
        section.style.display = 'block';
    });
}

// account js

function takedata( event ){
    event.preventDefault();
    Username=document.getElementById('name').value;
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;

    var Usernamedisplay=document.getElementById('name-display')
    var emaildisplay=document.getElementById('email-display')
    var passworddisplay=document.getElementById('password-display')
    
    Usernamedisplay.innerText=Username;
    emaildisplay.innerText=email;
    passworddisplay.innerText = password;

}
function showprofile(){
    var form=document.querySelector('.account-login');
    var profile=document.querySelector('.account-profile');
    form.style.display='none'
    profile.style.display="block"
}
function editboxopen(){
    var editbox=document.querySelector('.edit-box');
    editbox.style.display='block'
    var profile=document.querySelector('.account-profile');
    profile.style.display='none';
}

function submitForm() {
    age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;

    var agedisplay=document.getElementById('age-display')
    var genderdisplay=document.getElementById('gender-display')
    var dobdisplay=document.getElementById('dob-display')

    age = parseInt(age);

    agedisplay.innerText=age;
    genderdisplay.innerText=gender;
    dobdisplay.innerText=dob;
    var editbox=document.querySelector('.edit-box');
    editbox.style.display='none'
    var profile=document.querySelector('.account-profile');
    profile.style.display="block"

    updateWorkoutSections();
}
function updateWorkoutSections() {
    const workoutContainers = document.querySelectorAll('.workout-container');

    if (age >= 0 && age <= 18) {
        showWorkoutSection(workoutContainers[0]);
        hideWorkoutSections([workoutContainers[1], workoutContainers[2]]);
    } else if (age > 18 && age <= 50) {
        showWorkoutSection(workoutContainers[1]);
        hideWorkoutSections([workoutContainers[0], workoutContainers[2]]);
    } else if (age > 50) {
        showWorkoutSection(workoutContainers[2]);
        hideWorkoutSections([workoutContainers[0], workoutContainers[1]]);
    } else if (age == null) {
        showWorkoutSections(workoutContainers);
    }
    
}
function redirectToRitvik() {
    window.location.href = 'https://www.instagram.com/ritviksahore/','_blank';
}
function redirectToAditya() {
    window.location.href = 'https://www.instagram.com/aadising07/';
}
function redirectToTanya() {
    window.location.href = 'https://www.instagram.com/tanyamaniktala/';
}
function redirectToYash() {
    window.location.href = 'https://www.instagram.com/_.yashnaagar._/';
}