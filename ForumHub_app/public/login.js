const usernameInput = document.querySelector("#username"),
	
	passwordInput = document.querySelector("#password"),
	
	loginButton = document.querySelector(".login-button");

loginButton.onclick = async () => {
	// console.log("veikiu!");
	const data = new FormData();
	data.append("username", usernameInput.value);
	data.append("password", passwordInput.value);
	

	const promise = await fetch("http://localhost:3000/api/user/login", {
		method: "post",
		body: data,
	});

	const response = await promise.json();
	console.log(response);
};