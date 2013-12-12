// Rick Wilson CA276 Javascript Final Project 
var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
	var errors, i, errorDiv, successDiv, firstNamePattern, firstNameLength, lastNamePattern, lastNameLength, emailPattern, datePattern, bioPattern, bioLength, phonePattern;
	
	errors = [];
	errorDiv = document.getElementById('error');
	successDiv = document.getElementById('success');
	/*sets regex criteria to test first name format*/
	firstNamePattern = /^[\w\s]+$/;
	/*sets regex criteria to test first name format adding additional test for length max 50 characters*/
	firstNameLength = /^[\w\s]{1,50}$/;
	/*sets regex criteria to test last name format*/
	lastNamePattern = /^[\w\s]+$/igm;
	/*sets regex criteria to test last name format adding additional test for length max 50 characters*/
	lastNameLength = /^[\w\s]{1,50}$/igm;
	/*sets regex criteria to test email address format*/
	emailPattern = /[\w\-.]+@[\w]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
	/*sets regex criteria to test biography entry format adding additioal test for length max 140 characters*/
	bioPattern = /^[\w\s!@%#&"'()<>\*\?\$\^]{1,140}$/igm;
	/*sets regex criteria to test phone number format*/
	phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	
	// required field
	//validates whether entry has been made in first_name field
	if (this.first_name.value === "") {
		errors.push('First name is required');
	} else {
			//validates the content of the field against regex criteria
			if (firstNamePattern.test(this.first_name.value) === false) {
			errors.push('First Name may contain alphanumeric characters and spaces only');
			} else {
					//validates whether entry in field exceeds max character value
					if (firstNameLength.test(this.first_name.value) === false) {
					errors.push('First Name can be 50 characters max');
					}
				}
			}

	// required field
	//validates whether entry has been made in last_name field
	if (this.last_name.value === "") {
		errors.push('Last Name is required');
	} else {
			//validates the content of the field against regex criteria
			if (lastNamePattern.test(this.last_name.value) === false) {
			errors.push('Last Name may contain alphanumeric characters and spaces only');
			} else {
					//validates whether entry in field exceeds max character value
					if (lastNameLength.test(this.last_name.value) === false) {
					errors.push('Last Name can be 50 characters max');
					}
				}
			}		
		
	// validates entry in age field is a number if entry has been made
	if (isNaN(this.age.value) === true) {
		errors.push('Please enter your age in number format');
	} else {
		//requests user state correct age if value over 110 has been entered
		if (parseInt(this.age.value) > 110) {
			errors.push('Please enter your real age!');
		}
	}
	//required field
	/* validates whether entry has been made in email field and tests for valid formatting*/ 
	if (emailPattern.test(this.email.value) === false) {
		errors.push('Please enter a valid e-mail address');
	}
	//required field
	//validates whether selection has been made from experience drop down menu
	if (this.experience.value.length === 0) {
		errors.push('Please indicate your experience level');
	}
	//required field
	//validates whether entry has been made in the about_me field
	if (this.about_me.value === "") {
		errors.push('A brief bio is required');
	} else {
			//validates the content of the field against regex character criteria and max length
			if (bioPattern.test(this.about_me.value) === false) {
					errors.push('Your Bio is too long - Please limit your biography to 140 characters');
					}
			}
		

	/* validates whether entry has been made in website field - runs no further test if field is left blank */
	if  ((this.website.value) !== "") {
		/*validates format if a url has been entered - function returns an array that contains either a valid url string or null */
		function is_valid_url(url) {
				return url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
				}	

		var url = (is_valid_url(form.website.value));

	 	if (url === null) {
	 	 	//if returned array contains null then error prompt is generated
			errors.push('Website url is invalid');
			}
	}

	//validate format of home phone number 
	if (phonePattern.test(this.home_phone.value)) {
		var formattedPhoneNumber =
		this.home_phone.value.replace(phonePattern, "($1) $2-$3");
		console.log(formattedPhoneNumber);
		this.home_phone.value = formattedPhoneNumber;
	} else {
			// Invalid phone number
			errors.push('Please enter a valid home phone number');
	}
	
	//validate format of mobile phone number 
	if (phonePattern.test(this.mobile_phone.value)) {
		var formattedPhoneNumber =
		this.mobile_phone.value.replace(phonePattern, "($1) $2-$3");
		console.log(formattedPhoneNumber);
		this.mobile_phone.value = formattedPhoneNumber;
	} else {
			// Invalid phone number
			errors.push('Please enter a valid mobile phone number');
	}


	//required item
	//validates whether radio button has been selected from the meal fieldset
	if (document.querySelectorAll('[name=meal]:checked').length === 0) {
		errors.push('Please select your preferred meal');
	}
	//required item
	//validates whether any skills have been selected from the skills fieldset
	if (document.querySelectorAll('[name=skills]:checked').length === 0) {
		errors.push('Please indicate your skills');
	}

	//required item
	// validates entry in date of arrival field for proper formating
	if (isDate(this.date_of_arrival.value) === false) {
		errors.push('Please enter a valid date of arrival');
	}

	// Date validation function - works for 2014
	function isDate(date) {
		var dateParts, month, day, year;
		month="";
		day="";
		year="";
		dateParts = date.split('/');

		if (dateParts.length !== 3) {
			return false;
			}
		// verify all parts are numbers
		if (
			isNaN(parseFloat(dateParts[0])) || 
			isNaN(parseFloat(dateParts[1])) ||
			isNaN(parseFloat(dateParts[2]))
			) {
			return false;
		}

		month=parseInt(dateParts[0]);
		day=parseInt(dateParts[1]);
		year=parseInt(dateParts[2]);
								
		// month validation
		if (month < 1 || month > 12) {
			return false;
		} 
		
		// day validation
		if ((day < 1) || (day > 31)) {
			return false;
		} else  {
			//30 day months
			if 	((month === 4 ||
				  month === 6 ||
				  month === 9 ||
				  month === 11) && day === 31) {
			return false;
			} else {
				//February - need to update if in a leap year
				if (month === 02 && day > 28) {
				return false;
				} 
			}
		}
		
		/* year validation - can change either year to accept range of years, though would need to add further coding to account for leap years */
		if (year < 2014 || year > 2014) {
			return false;
		} 
		return true;
		}
		//end function isDate()

	//If any inputs failed prevent form submit
	if (errors.length > 0) {
		//prevent form submit
		e.preventDefault();
		
		//unhide
		errorDiv.className = '';
		
		//clear out previous errors
		errorDiv.innerHTML = errors.join('<br>');
	} else {
		/*stricly for the purposes of this example to display success message - normally we want form to go ahead and submit validated data but submit behavior has been disabled so we can see the success message*/
		errorDiv.innerHTML = errors.join('<br>');
		console.log(errors);
		errorDiv.className = 'hidden';
		successDiv.className = '';
		e.preventDefault();
	}		
}, false);