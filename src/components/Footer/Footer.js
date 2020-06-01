import Component from "../../lib/Component.js";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
  }

  initialRender() {
    this.$element.innerHTML = `<footer>Copyright 2020 Heungsoo Kim</footer>`;
  }
}
