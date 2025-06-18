document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("loginForm").style.display = "none";
        const message = document.getElementById("welcomeMessage");
        message.textContent = `Welcome, ${username}!`;
        message.classList.remove("hidden");
    } else {
        alert("Invalid username or password");
    }
});
