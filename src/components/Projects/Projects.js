import Component from "../../lib/Component.js";

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
  }

  initialRender() {
    this.$element.innerHTML = `
      <div class='projects-wrapper'>
        <h2>Projects</h2>
        <ul>
          <li>
            Connect Flavor
          </li>
          <li>
            Wedium
          </li>
          <li>
            ???
          </li>
        </ul>
      </div>`;
  }

  render() {
    console.log("render");
  }
}
