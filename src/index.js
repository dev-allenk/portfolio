import Store from "./lib/Store.js";
import GlobalNav from "./components/GlobalNav/index.js";
import SideNav from "./components/SideNav/index.js";
import Introduction from "./components/Introduction/index.js";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";
import Footer from "./components/Footer/index.js";

function reducer(state, action) {
  console.log(state, action);
}

const store = new Store(reducer, {});
const footer = new Footer({ store });
const skills = new Skills({ store });
const projects = new Projects({ store });
const sideNav = new SideNav({ store });
const globalNav = new GlobalNav({ store });
const introduction = new Introduction({ store });

window.addEventListener("DOMContentLoaded", () => {
  const $root = document.getElementById("root");

  globalNav.mount($root);
  sideNav.mount($root);
  introduction.mount($root);
  skills.mount($root);
  projects.mount($root);
  footer.mount($root);
});
