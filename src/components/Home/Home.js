import Component from "../../lib/Component.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
    this.store.dispatch({ type: "init" });
  }

  initialRender() {
    this.$element.innerHTML = `
      <section class='home-wrapper center'>
        <h1 class='home-title'>반갑습니다. 프론트엔드 개발자 김흥수입니다.</h1>
        <button class='home-button' type='button'>
          <span>View my work</span>
          <span class='home-button-icon'>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </section>`;
  }

  render() {
    console.log("render");
  }
}
