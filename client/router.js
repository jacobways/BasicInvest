// template
const LandingPageTemplate = require("./pages/LandingPage.js");
const KoreanTemplate = require("./pages/Korean.js");
const USATemplate = require("./pages/USA.js");
const CommodityTemplate = require("./pages/Commodity.js");
const OpinionTemplate = require("./pages/Opinion.js");

const LandingPage = LandingPageTemplate();
const Korean = KoreanTemplate();
const USA = USATemplate();
const Commodity = CommodityTemplate();
const Opinion = OpinionTemplate();

const routes = {
  "/": LandingPage,
  "/korean": Korean,
  "/usa": USA,
  "/commodity": Commodity,
  "/opinion" : Opinion,
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
  if (document.querySelector('main')) document.querySelector('main').remove();
  element.appendChild(route);
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
