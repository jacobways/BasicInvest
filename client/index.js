// router
const { initialRoutes, historyRouterPush } = require("./router");

// const { exchangeRateChart } = require("./chart/exchangeRate");

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
