import "./Expenses.css";
import { itemsList } from "../itemsDB/items";
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import ItemCost from "./items/ItemCost";
import ItemContainer from "./wrappers/ItemContainer";
import Wrapper from "./wrappers/Wrapper";
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Expenses() {
  // Creating each row to add to components when called.

  // console.log(itemsList);
  return (
    <Wrapper>
      <ItemContainer>
        <ItemIcon icons={itemsList[0].icons} classes={itemsList[0].classes}></ItemIcon>
        <ItemInfo data={itemsList[0].data}></ItemInfo>
        <ItemCost money={itemsList[0].money}></ItemCost>
      </ItemContainer>
      {/* 
      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faCircle} className="light-incoming" />
            <FontAwesomeIcon
              icon={faSackDollar}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Freelance work</h2>
          <small className="expense-date">24/1/2022</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; 260€</span>
          <FontAwesomeIcon
            icon={faCircleUp}
            className="m-left-20 light-bill"
          />
        </div>
      </div>

      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faCircle} className="light-incoming" />
            <FontAwesomeIcon
              icon={faPiggyBank}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Transfer</h2>
          <small className="expense-date">5/5/2022</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; 100€</span>
          <FontAwesomeIcon
            icon={faCircleUp}
            className="m-left-20 light-bill"
          />
        </div>
      </div>

      <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faCircle} className="light-outgoing" />
            <FontAwesomeIcon
              icon={faGasPump}
              inverse
              transform="shrink-8"
              className="outgoing"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Gasoline</h2>
          <small className="expense-date">20/9/2022</small>
        </div>
        <div className="item-cost flex-20 expense fa-3x flex-center">
          <span>&#8722; 40€</span>
          <FontAwesomeIcon
            icon={faCircleDown}
            className="m-left-20 light-bill"
          />
        </div>
      </div> */}
    </Wrapper>
  );
}

export default Expenses;
