// template
import LandingPageTemplate from "./pages/LandingPage.hbs";
import KoreanTemplate from "./pages/Korean.hbs";
import USATemplate from "./pages/USA.hbs";
import GlobalTemplate from "./pages/Global.hbs";

const LandingPage = LandingPageTemplate();
const Korean = KoreanTemplate();
const USA = USATemplate();
const Global = GlobalTemplate();

const routes = {
  "/": LandingPage,
  "/korean": Korean,
  "/usa": USA,
  "/global": Global,
};

// entry point
const initialRoutes = (element) => {
  renderHTML(element, routes["/"]);

  window.onpopstate = () =>
    renderHTML(element, routes[window.location.pathname]);
};

// set browser history
const historyRouterPush = (pathName, element) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(element, routes[pathName]);
};

// render
const renderHTML = (element, route) => {
  element.innerHTML = route;
};


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
