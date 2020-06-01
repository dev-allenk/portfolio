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
        <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi laboriosam blanditiis cumque accusantium, quod iure voluptatibus, sequi quia deserunt beatae cupiditate incidunt qui odit. Nemo, numquam libero. Minima et, eum quae quidem aut quam vitae natus modi, harum perspiciatis explicabo nisi beatae aperiam dolore dolorem velit molestiae quisquam voluptas corrupti?
        </p>
      </div>`;
  }

  render() {
    console.log("render");
  }
}
