class Ajax {
    constructor(url) {
        this.url = url;
    }

    getResponse = async function () {
        let response = await fetch(this.url, {headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDhhYTc3OTgwYTAxZjBiNDA3ZmI3NzEiLCJpYXQiOjE2MTk4NzM5ODksImV4cCI6MTYxOTk2MDM4OX0.f6S6ZCr7KPBP-wpBv0nVfd_akroapsEhzhHqgqzLOxE"
        }});
        if (response.ok) {
            return response.json();
        } else {
            console.error("Error : ", response.status);
        }
    }
}

let ajaxResponse = new Ajax('http://localhost:3000/api/user');

ajaxResponse.getResponse()
    .then(data => {
        console.log(data[1].username);
    })

var navigationBar = new Vue({
    el: "#navigation-bar",
    data: {
        username: 'Florian'
    }
})