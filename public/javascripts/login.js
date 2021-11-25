// get a ref to forms elements
// login form
// querySelector (as would be referred in CSS stylesheet) is the new and preferred function
var input_login_username = document.querySelector("#input_login_username");
var input_login_password = document.querySelector("#input_login_password");
var error_msg_login = document.getElementById("error_msg_login");
let submit_log_btn = document.getElementById("submit-log-btn");
let login_form = document.getElementById("login");
let toggle_btn_login = document.querySelector(".toggle-button.login");

// register form
var input_register_username = document.querySelector("#input_register_username");
var input_register_email = document.querySelector("#input_register_email");
var input_register_password = document.querySelector("#input_register_password");
var error_msg_register = document.getElementById("error_msg_register");
var check_box = document.getElementById("reg-check-box");
let submit_reg_btn = document.getElementById("submit-reg-btn");
let register_form = document.getElementById("register");
let toggle_btn_register = document.querySelector(".toggle-button.register");

// toggle-button
var btn = document.getElementById("btn");

// initial state of checkbox and register button
var x = false;
toggle_btn_register.style.color = "black";

// shift the forms left property, another method would be to set the classname of form and change the properties
// in the css file
function register() {
    login_form.style.left = "-400px";
    register_form.style.left = "50px";
    submit_reg_btn.style.left = "0px";
    btn.style.left = "110px";
    toggle_btn_login.style.color = "black";
    toggle_btn_register.style.color = "white";
}
function login() {
    login_form.style.left = "50px";
    register_form.style.left = "450px";
    submit_log_btn.style.left = "0px";
    btn.style.left = "0";
    toggle_btn_register.style.color = "black";
    toggle_btn_login.style.color = "white";
}

// using arrow functions
// validate the loginform as user types input
// login_form.addEventListener("keyup", (e) => {

//         return validateLoginForm();

// });

// // validate the registration form on key up
// register_form.addEventListener("keyup", (e) => {

//     return validateRegisterForm();

// });

// // validate the registration form on click submit button
// submit_reg_btn.onclick = function() {
//     validateRegisterForm();
// };

// // validate the login form on click submit button
// submit_reg_btn.onclick = function() {
//     validateLoginForm();
// };

// // get checkbox state then validate the registration form
// check_box.onclick = function() {
//     x = check_box.checked;
//     validateRegisterForm();
// };

// // perform register-form validation
// function validateRegisterForm(){

//     // show the error msg
// 	if(!checkUserName(input_register_username.value)) {
//         setErrorRegister("inline-block","Username must include at least 1 Uppercase letter and at least 6 characters.");
//         return false;
//     }

//     // show the error msg
// 	if(!isValidEmail(input_register_email.value)){
// 		setErrorRegister("inline-block","Please enter a valid email.");
// 		return false;
// 	}

// 	// show the error msg
// 	if(!checkPassword(input_register_password.value)){
// 		var msg = "Password must contain at least 1 number, 1 UPPERCASE/lowercase and at least 6 characters.";
// 		setErrorRegister("inline-block", msg);
// 		return false;
// 	}
   
//     // test check-box state
//     if (x !== true) {
//         var msg = "You must agree to the terms and conditions.";
// 		setErrorRegister("inline-block", msg);
// 		return false;
   
//     }
//     // all inputs are valid, hide the error msg
//     if(checkPassword(input_register_password.value) && checkUserName(input_register_username.value) && isValidEmail(input_register_email.value) && (x === true)) {
//         setErrorRegister("none", "");
//         return true;
//     }	
// }

// // perform login-form validation
// function validateLoginForm(){

//     // show the error msg
// 	if(!checkUserName(input_login_username.value)) {
//         setErrorLogin("inline-block","Username must include at least 1 Uppercase letter and at least 6 characters.");
//         return false;
//     }

// 	// show the error msg
// 	if(!checkPassword(input_login_password.value)){
// 		var msg = "Password must contain at least 1 number, 1 UPPERCASE/lowercase and at least 6 chars.";
// 		setErrorLogin("inline-block", msg);
// 		return false;
// 	}
    
//     // both inputs are valid, hide the error msg
//     if(checkPassword(input_login_password.value) && checkUserName(input_login_username.value)){
//         setErrorLogin("none", "");
//         return true;
//     }	
// }

// // show the error message, enable/disable submit button, change the class of submit button
// function setErrorRegister(disp, msg) {
// 	error_msg_register.style.display = disp;
//     error_msg_register.innerHTML = msg;
//     submit_reg_btn.disabled = (disp === 'none') ? false: true;
//     submit_reg_btn.className = (disp === 'none') ? "submit-reg-btn enabled": "submit-reg-btn disabled";
// }

// // show the error message, enable/disable submit button, change the class of submit button
// function setErrorLogin(disp, msg) {
// 	error_msg_login.style.display = disp;
//     error_msg_login.innerHTML = msg;
//     submit_log_btn.disabled = (disp === 'none') ? false: true;
//     submit_log_btn.className = (disp === 'none') ? "submit-log-btn enabled": "submit-log-btn disabled";
// }

// function checkUserName(str) {
//     // one lowercase and one uppercase letter
//     // at least six characters
//     var re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
//     return re.test(str);
// }

// function checkPassword(str){
//     // at least one number, one lowercase and one uppercase letter
//     // at least six characters
//     var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//     return re.test(str);
// }

// function isValidEmail(email) {
//     // make sure email is valid
// 	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

