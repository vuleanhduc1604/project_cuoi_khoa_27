import { login } from "./api.js";

import "bootstrap/dist/css/bootstrap.min.css";

import "./toastr.js"
const form = document.querySelector(".login");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    try {
        const { data, headers } = await login({ username, password });

        const [_, token] = headers.authorization.split(" ");

        localStorage.setItem("token", token);
        toastr["success"]("Logged in successfully. Redirecting...")

        setTimeout(() => {window.location.href = "index.html";},6000)
    } catch ({ response }) {
        alert(response.data.error);
    }
});
