// template
const LandingPageTemplate = require("./pages/LandingPage.js");
const KoreanTemplate = require("./pages/Korean.js");
const USATemplate = require("./pages/USA.js");
const CommodityTemplate = require("./pages/Commodity.js");
const OpinionTemplate = require("./pages/Opinion.js");
const RegisterTemplate = require("./pages/Register.js")
const LoginTemplate = require("./pages/Login.js")
const MyPageTemplate = require("./pages/MyPage.js")

const LandingPage = LandingPageTemplate();
const Korean = KoreanTemplate();
const USA = USATemplate();
const Commodity = CommodityTemplate();
const Opinion = OpinionTemplate();
const Register = RegisterTemplate();
const Login = LoginTemplate();
const MyPage = MyPageTemplate();

const routes = {
  "/": LandingPage,
  "/korean": Korean,
  "/usa": USA,
  "/commodity": Commodity,
  "/opinion" : Opinion,
  "/register" : Register,
  "/login": Login,
  "/mypage": MyPage,
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
const renderHTML = async (element, route) => {
  if (document.querySelector('main')) document.querySelector('main').remove();
  element.appendChild(await route);
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
