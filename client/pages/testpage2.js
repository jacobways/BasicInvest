
// 여기서 HTML을 만들고, 이벤트 또는 차트를 등록하자
// HTML은 return 문에 문자열 템플릿으로 만들지 DOM으로 만들지 둘 다 시도해보자

// HTML을 만든 뒤, 뒤이어 이벤트 등록하기


// 우선 DOM 사용해서 만들기
module.exports = function createHTML () {
  
  const div = document.createElement('div');
  div.innerText = 'test2 페이지'

  const button = document.createElement('button')

  button.setAttribute('id', 'ButtonTest2')
  button.innerText = '버튼 클릭'
  button.onclick = function(){
    console.log('클릭')
    return 'click'
  }
  div.appendChild(button)
  console.log('div', div, typeof(div))
  console.log('div.outerHTML', div.outerHTML, typeof(div.outerHTML))
  // document.getElementById('root').appendChild(div)
  
  return div
}

// DOM으로 하는게 맞겠다.

// function createHTML () {
//   const content = `
//   <div>
//   test2 페이지
//   <button id="ButtonTest2">버튼 클릭</button>
//   </div>
//   `
//   return content
// }

// function buttonClick (ButtonTest2) {
//   ButtonTest2.onclick= function () {
//     console.log('button click')
//   }
// }

// // 버튼이벤트 할당
// function testpage2 (createHTML, buttonClick) {
//   createHTML()
//   return buttonClick(document.getElementById('ButtonTest2'))
// } 

// module.exports = {
//   createHTML,
//   buttonClick,
//   testpage2,
// }