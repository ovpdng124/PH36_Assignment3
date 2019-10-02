function validate_form(){
	var id = document.getElementById("reg_id").value;
	var check_id = document.getElementById("reg_id_check").value;
	var pass = document.getElementById("reg_pass").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var numberName = /^[0-9]+$/;
	if(id == "" || id == null)
		alert("Please input your email address or mobile number!");
	else if(check_id != id)
		alert("Re-enter email address or mobile number was wrong!!!")
	else if(pass == "" || pass == null)
		alert("Please set your password!");
	else if(pass.length < 8)
		alert("Your password must be 8 letters or more!!!")
	else if(firstname == "" || firstname == null || lastname == "" || lastname == null)
		alert("Please set your first name or last name!");
	else if(firstname.length > 20 || lastname.length > 20)
		alert("First name or last name maximum is 20 characters!!!");
	else if(numberName.test(firstname) || numberName.test(lastname))
		alert("First name or last name don't include the number!!!");
	else
		alert("Wellcome to Facebook!");
}

function click_signIn(){
	var id = document.getElementById("sign_id").value;
	var pass = document.getElementById("sign_pass").value;
	if(id == "" || id == null || pass == "" || pass == null)
		alert("Input your ID or Password!!!");
	else
		alert("Welcome: " + id);
}