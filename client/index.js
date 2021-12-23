// router
const { initialRoutes, historyRouterPush } = require("./router");
// const { buttonEvent } = require("./pages/button.js")

// const { exchangeRateChart } = require("./chart/exchangeRate");

const contentDiv = document.querySelector('#root')

// Browser History
initialRoutes(contentDiv);


// const KoreanButton = document.querySelector('#KoreanButton')
// const TestButton = document.querySelector('#buttonTest')
// console.log('KoreanButton, TestButton', KoreanButton, TestButton)
// buttonEvent(KoreanButton, TestButton);


window.onload = () => {

  const historyLinker = document.querySelectorAll(".history");
  
  historyLinker.forEach((element) => {

    element.addEventListener("click", (event) => {

      const pathName = event.target.getAttribute("route");
      
      historyRouterPush(pathName, contentDiv);

    });
  });
};

