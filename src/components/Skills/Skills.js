import Component from "../../lib/Component.js";

export default class Skills extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
  }

  initialRender() {
    this.$element.innerHTML = `
      <div class='skills-wrapper'>
        <h2>Skills</h2>
        <p>
        HTML / CSS / JavaScript / Typescript / React / Next.js
        </p>
        <p>
        Redux / Redux-saga / sass / css-modules / styled-components / webpack
        </p>
      </div>`;
  }

  render() {
    console.log("render");
  }
}
