const hethong = document.querySelector('#hethong');
const checkaccount = async() => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'dangnhap.html';
    }

    try {
        let headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        let reqOptions = {
            url: "https://todo-api-with-auth.herokuapp.com/api/auth/user",
            method: "GET",
            headers
        };

        return axios.request(reqOptions);
    } catch (err) {
        localStorage.removeItem("token");
        console.log(err);
        window.location.href = 'dangnhap.html';
    }
}
hethong.addEventListener("click", function()  {
    if (!checkaccount()) {
        window.location.href = 'dangnhap.html'
    } else {
        window.location.href = 'hethong.html'
    }
})