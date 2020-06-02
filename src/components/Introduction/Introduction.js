import Component from "../../lib/Component.js";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialRender();
  }

  initialRender() {
    this.$element.innerHTML = `
      <div class='introduction-wrapper'>
        <h2>Introduction</h2>
        <p>
        생산적이고 의미있는 일을 하고 싶은 개발자 김흥수입니다.<br>
        일을 통해 성장하고 더 많은 문제를 해결하며 많은 사람들에게 도움이 되고 싶습니다.
        </p>
        <p>
        비록 관련학과를 전공하지는 않았지만 문제를 해결하기 위한 기초를 충분히 다졌습니다.<br>
        HTML, CSS, javascript에 대한 이해를 바탕으로, 프레임워크나 라이브러리의 도움 없이도
        필요한 요구사항을 구현할 수 있습니다.
        </p>
        <p>
        리액트를 잘 활용하며, sass와 styled-components를 활용한 스타일링에 익숙합니다.<br>
        중복을 줄이고 재사용 가능한 컴포넌트를 만드는데에 흥미가 있습니다.
        </p>
        <p>
        지속적인 페어프로그래밍과 팀프로젝트를 통해 협업의 중요성을 경험했습니다.<br>
        믿을 수 있고, 함께 일하고 싶은 개발자가 되기 위해 노력하고 있습니다.
        </p>
      </div>`;
  }

  render() {
    console.log("render");
  }
}
