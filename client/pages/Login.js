const LandingPageTemplate = require("./LandingPage");
const LandingPage = LandingPageTemplate();

const historyRouterPush = (pathName, rootEle, newEle) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(rootEle, newEle);
};

// render
const renderHTML = async (element, route) => {
  if (document.querySelector('main')) document.querySelector('main').remove();
  element.appendChild(await route);
};

module.exports = function () {
  const main = document.createElement('main')

  const h1 = document.createElement('main')
  h1.textContent = '로그인 페이지'

  const form = document.createElement('form')
  const emailInput = document.createElement('input')
  emailInput.setAttribute('placeholder', '이메일 주소')
  const passwordInput = document.createElement('input')
  passwordInput.setAttribute('type', 'password')
  passwordInput.setAttribute('placeholder', '비밀번호')
  const button = document.createElement('button')
  button.textContent = '로그인 하기'
  button.onclick = function(event) {
    event.preventDefault()
    fetch(`${process.env.API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
    .then(response => response.json())
    .then(res=>{
      localStorage.setItem('token', res.data.data)
      document.getElementById('login').classList.add('hidden')
      document.getElementById('register').classList.add('hidden')
      document.getElementById('mypage').classList.remove('hidden')
      document.getElementById('logout').classList.remove('hidden')
      historyRouterPush("/", document.querySelector('#root'), LandingPage)

    })
    .catch(console.log)
  }
  form.append(
    emailInput, 
    document.createElement('br'),
    passwordInput, 
    document.createElement('br'),
    button
  )

  main.append(h1, form)

  return main

}
