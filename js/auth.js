    function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Enter email and password");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registration successful");
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.password !== password) {
        alert("Invalid credentials");
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}
