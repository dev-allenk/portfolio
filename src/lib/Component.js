import Store from "./Store.js";

export default class Component {
  constructor(props) {
    this.store = props.store;

    props.store instanceof Store
      ? props.store.subscribe(this.render.bind(this))
      : console.error("props.store is not instance of Store");
  }

  mount($target) {
    //creates container element
    this.$element = document.createElement("div");
    this.$element.className = this.constructor.name;

    //execute didMount before appending for better performance
    this.componentDidMount();

    $target.appendChild(this.$element);
  }

  componentDidMount() {
    //do something
  }

  initialRender() {
    //create DOM
  }

  render() {
    //manipulate DOM
  }
}
