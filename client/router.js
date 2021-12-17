// template
const LandingPageTemplate = require("./pages/LandingPage.hbs");
const KoreanTemplate = require("./pages/Korean.hbs");
const USATemplate = require("./pages/USA.hbs");
const CommodityTemplate = require("./pages/Commodity.hbs");
const OpinionTemplate = require("./pages/Opinion.hbs");

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
  element.innerHTML = route;
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
