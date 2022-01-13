module.exports = function () {

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


  // 마이페이지 버튼 onclick 했을 때 DOM 트리 생성되게 만들기 (원래 것이 있다면, 지우고 다시)

  const main = document.createElement('main')

  

  let onChangeInfo = false;

  document.getElementById('mypage').onclick = async function createElement () {

    let token = localStorage.token

    // main 아래 있는 노드 모두 삭제 (마이페이지 버튼 클릭 시 매번 토큰의 유효성에 따라 데이터 재생성 하기 위함)
    while (main.hasChildNodes()) {
      main.removeChild(main.firstChild)
    }

    let response = await fetch(`${process.env.API}/${token}`, {credentials: 'include'});
    let json = await response.json();

    if (!json.data) {  // 토큰이 만료되었을 경우

      // 로그아웃 시킨 뒤 로그인 페이지로 이동

    } else {  // 토큰이 유효할 경우

      let id = json.data.id
      let email = json.data.email
      let username = json.data.username

      if (!onChangeInfo) {  // 수정중 x
        const Email = document.createElement('div')
        Email.textContent = email
  
        const Username = document.createElement('span')
        Username.textContent = username
  
        const buttonChange = document.createElement('button')
        buttonChange.textContent = '회원정보 수정'

        buttonChange.onclick = function (event) {
          event.preventDefault()
          onChangeInfo = true;
          createElement()
        }
        
        const buttonWithdraw = document.createElement('button')
        buttonWithdraw.textContent = '회원 탈퇴'
  
        buttonWithdraw.onclick = function (event) {
          event.preventDefault()
          fetch(`${process.env.API}/${localStorage.token}`, {
            method: "DELETE",
          })
          .then((data) => {
            localStorage.removeItem('token')
            document.getElementById('login').classList.remove('hidden')
            document.getElementById('register').classList.remove('hidden')
            document.getElementById('mypage').classList.add('hidden')
            document.getElementById('logout').classList.add('hidden')
            historyRouterPush("/", document.querySelector('#root'), LandingPage)
          } )
        } 
  
        main.append(
          Email, 
          Username, 
          document.createElement('br'),
          buttonChange, 
          buttonWithdraw
        )

      } else {
        const form = document.createElement('form')
        const Username = document.createElement('input')
        Username.setAttribute('placeholder', '사용자명')
        Username.setAttribute('value', username)
        const Email = document.createElement('input')
        Email.setAttribute('placeholder', '이메일 주소')
        Email.setAttribute('value', email)
        const Password = document.createElement('input')
        Password.setAttribute('type', 'password')
        Password.setAttribute('placeholder', '새 비밀번호')
        form.append(
          Username,
          document.createElement('br'),
          Email,
          document.createElement('br'),
          Password
        )
        const buttonChange = document.createElement('button')
        buttonChange.textContent = '회원정보 수정'

        buttonChange.onclick = function (event) {
          event.preventDefault()

          if (Password.value) {
            fetch(`${process.env.API}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: id,
                username: Username.value,
                email: Email.value,
                password: Password.value,
              }),
            })
            .then(res=>res.json())
            .then(data=>{
              localStorage.setItem('token', data.data)
              onChangeInfo = false;
              createElement()
            })
          } else {
            fetch(`${process.env.API}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: id,
                username: Username.value,
                email: Email.value,
              }),
            })
            .then(res=>res.json())
            .then(data=>{
              localStorage.setItem('token', data.data)
              onChangeInfo = false;
              createElement()
            })
          }


        }
        main.append(
          form, 
          document.createElement('br'),
          buttonChange
        )
        
      }


    }
  }


  // const h1 = document.createElement('main')
  // h1.textContent = '마이페이지'



  // const spanEmail
  // const spanUsername

  // const ButtonPassword
  // const ButtonWithdraw


  return main

}
