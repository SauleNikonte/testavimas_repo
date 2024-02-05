function validate(user) {
	// switch (user) {
	// 	case user.username.length < 5:
	// 		return "Username must be longer than 5 symbols";
	// 	case user.username.length > 70:
	// 		return "Username must be shorter than 70 symbols";
	// 	default:
	// 		return "success";
	// }

	const usernameValidation = validateUsername(user.username);
	// {isValid: false, message: " bad username...."}
	// {isValid: true, message: "success"}
	if (!usernameValidation.isValid) return usernameValidation.message;
	const passwordValidation = validatePassword(user.password);
	if (!passwordValidation.isValid) return passwordValidation.message;
	// if(user.password.length < 8)

	return "success";
}
function validateUsername(username) {
	if (username.length < 5) {
		return {
			isValid: false,
			message: "Username must be longer than 5 symbols",
		};
	} else if (username.length > 70) {
		return {
			isValid: false,
			message: "Username must be shorter than 70 symbols",
		};
	}
	return { isValid: true, message: "Success" };
}

function validatePassword(password) {
	if (password.length < 8) {
		return {
			isValid: false,
			message: "Password must be longer than 8 symbols",
		};
	}
	if (password.length > 80) {
		return {
			isValid: false,
			message: "Password must be shorter than 80 symbols",
		};
	}
	if (!/[0-9]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at least one number",
		};
	}
	if (!/[a-z]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at least one lowercase symbol",
		};
	}
	if (!/[A-Z]/.test(password)) {
		return {
			isValid: false,
			message: "Password must contain at least one uppercase symbol",
		};
	}
	return { isValid: true, message: "Success" };
}

module.exports = validate;