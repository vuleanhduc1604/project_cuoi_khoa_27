import { signup } from "./api.js";

import "bootstrap/dist/css/bootstrap.min.css";
const form = document.querySelector(".signup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    try {
        const { data, headers } = await signup({ username, password, firstname, lastname });

        alert("You're signed up. Now log in pls");

        window.location.href = "../dangnhap.html";
    } catch ({ response }) {
        alert(response.data.error);
    }
});
