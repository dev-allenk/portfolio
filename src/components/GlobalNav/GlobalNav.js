import Component from "../../lib/Component.js";

export default class GlobalNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
    this.store.dispatch({ type: "init" });
  }

  initialRender() {
    this.$element.innerHTML = `
      <nav class='global-nav'>
        <div class='global-nav-links'>
          <a href='#'>Main</a>
          <a href='#'>Skills</a>
          <a href='#'>Projects</a>
          <a href='#'>Contact</a>
        </div>
      </nav>`;
  }

  render() {
    console.log("render");
  }
}
