//css
require('./css/style.css')

// router
const { initialRoutes, historyRouterPush } = require("./router");


const contentDiv = document.querySelector('#root')

// Browser History
initialRoutes(contentDiv);

window.onload = () => {

  const historyLinker = document.querySelectorAll(".history");

  historyLinker.forEach((element) => {

    element.addEventListener("click", (event) => {

      const pathName = event.target.getAttribute("route");
      
      historyRouterPush(pathName, contentDiv);

    });
  });
};


// 로그아웃 버튼 클릭 시 Navbar 변경
document.getElementById('logout').onclick = function (event) {
  event.preventDefault()
  localStorage.removeItem('token')
  document.getElementById('login').classList.remove('hidden')
  document.getElementById('register').classList.remove('hidden')
  document.getElementById('mypage').classList.add('hidden')
  document.getElementById('logout').classList.add('hidden')
  historyRouterPush('/', contentDiv)
}

// 만약 로그인 상태에서 재랜더링 되면, Navbar에 마이페이지/로그아웃 띄워주기
if ('token' in localStorage) {
  document.getElementById('login').classList.add('hidden')
  document.getElementById('register').classList.add('hidden')
  document.getElementById('mypage').classList.remove('hidden')
  document.getElementById('logout').classList.remove('hidden')
}