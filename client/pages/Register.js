module.exports = function () {
  const main = document.createElement('main')

  const h1 = document.createElement('main')
  h1.textContent = '회원가입 페이지'

  const form = document.createElement('form')
  const usernameInput = document.createElement('input')
  usernameInput.setAttribute('placeholder', '사용자명')
  const emailInput = document.createElement('input')
  emailInput.setAttribute('placeholder', '이메일 주소')
  const passwordInput = document.createElement('input')
  passwordInput.setAttribute('type', 'password')
  passwordInput.setAttribute('placeholder', '비밀번호')
  const button = document.createElement('button')
  button.textContent = '가입하기'
  button.onclick = function(event) {
    event.preventDefault()
    fetch(`${process.env.API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
  }
  form.append(
    usernameInput, 
    document.createElement('br'),
    emailInput, 
    document.createElement('br'),
    passwordInput, 
    document.createElement('br'),
    button)

  main.append(h1, form)

  return main
}