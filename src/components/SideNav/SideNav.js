import Component from "../../lib/Component.js";

export default class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
  }

  initialRender() {
    this.$element.innerHTML = `
      <div class='side-nav-wrapper'>
        <div>Main</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>`;
  }

  render() {
    console.log("render");
  }
}
