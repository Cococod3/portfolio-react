import "./Expenses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSackDollar,
  faPiggyBank,
  faHandHoldingDollar,
  faUtensils,
  faMasksTheater,
  faFaucetDrip,
  faPlug,
  faGasPump,
  faCartShopping,
  faCircleUp,
  faCircleDown,
  faEuroSign,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Expenses() {
  return (
    <div className="wrapper">
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center"></div>
        <span className="fa-layer fa-fw fa-xl">
          <FontAwesomeIcon icon={faSquare} className="light-bill" />
          <FontAwesomeIcon
            icon={faUtensils}
            inverse
            transform="shrink-8"
            className="bill"
          />
        </span>
        <div className="item-info flex-60">
          <h2>Eating out</h2>
          <small className="expense-date">9/1/2022</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; 260€</span>
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="m-left-20 light-bill"
          />
        </div>
      </div>
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center"></div>
        <span className="fa-layer fa-fw fa-xl">
          <FontAwesomeIcon icon={faSquare} className="light-bill" />
          <FontAwesomeIcon
            icon={faSackDollar}
            inverse
            transform="shrink-8"
            className="bill"
          />
        </span>
        <div className="item-info flex-60">
          <h2>Freelance work</h2>
          <small className="expense-date">9/1/2022</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; 260€</span>
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="m-left-20 light-bill"
          />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
