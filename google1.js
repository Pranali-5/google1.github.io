function Register(e) {
  e.preventDefault();
  let formdata = {
    name: document.getElementById("inp1").value,
    email: document.getElementById("inp2").value,
    password: document.getElementById("inp3").value,
    username: document.getElementById("inp4").value,
    mobile: document.getElementById("inp5").value,
    description: document.getElementById("inp6").value,
  };
  formdata = JSON.stringify(formdata);
  console.log("form:", formdata);

  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: formdata,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function Login(e) {
  e.preventDefault();
  let formdata = {
    password: document.getElementById("inp8").value,
    username: document.getElementById("inp7").value,
  };
  body = JSON.stringify(formdata);
  console.log("form:", formdata);

  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: body,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);

      homePage();
    })
    .catch((err) => {
      console.log(err);
    });
}

function homePage() {
  window.location.href = "homepage.html";
}
