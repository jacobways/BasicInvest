module.exports = function () {
  
  // 마이페이지 버튼 onclick 했을 때 DOM 트리 생성되게 만들기 (원래 것이 있다면, 지우고 다시)

  const main = document.createElement('main')

  document.getElementById('mypage').onclick = async function () {

    // main 아래 있는 노드 모두 삭제
    while (main.hasChildNodes()) {
      main.removeChild(main.firstChild)
    }

    let token = localStorage.token
  
    let response = await fetch(`http://localhost:5000/${token}`, {credentials: 'include'});
    let json = await response.json();

    if (!json.data) {  // 토큰이 만료되었을 경우

      // 로그아웃 시킨 뒤 로그인 페이지로 이동

    } else {  // 토큰이 유효할 경우

      // let onChangeUsername = false;
      // let onChangePassword = false;

      let email = json.data.email
      let username = json.data.username

      const h1 = document.createElement('h1')
      h1.textContent = '마이페이지'

      const Email = document.createElement('div')
      Email.textContent = email

      const Username = document.createElement('span')
      Username.textContent = username

      const buttonPassword = document.createElement('button')
      buttonPassword.textContent = '비밀번호 변경'
      const buttonWithdraw = document.createElement('button')
      buttonWithdraw.textContent = '회원 탈퇴'

      buttonWithdraw.onclick = function (event) {
        event.preventDefault()
        fetch(`http://localhost:5000/${localStorage.token}`, {
          method: "DELETE",
        })
        // then문을 통해 랜딩페이지로 이동하기
      } 

      main.append(
        h1, 
        Email, 
        Username, 
        document.createElement('br'),
        buttonPassword, 
        buttonWithdraw
      )
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
