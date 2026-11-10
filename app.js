
const profileButton = document.getElementById("profileButton");
const profileDropdown = document.getElementById("profileDropdown");

profileButton.addEventListener("click", function(event) {

    event.stopPropagation();

    profileDropdown.classList.toggle("show");

});



document.addEventListener("click", function(event) {

    if (!profileDropdown.contains(event.target) &&
        !profileButton.contains(event.target)) {

        profileDropdown.classList.remove("show");

    }

});


document.getElementById("loginButton").addEventListener("click", function() {

    profileDropdown.classList.remove("show");

    alert("صفحه ورود به حساب کاربری");

});


document.getElementById("signupButton").addEventListener("click", function() {

    profileDropdown.classList.remove("show");

    alert("صفحه ثبت نام کاربر جدید");

});