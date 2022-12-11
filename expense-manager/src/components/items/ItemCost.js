import "./ItemCost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
function ItemCost(props) {
    // Creating constant for the plus and minus signs to make them dynamic.
  const sign = {
    plus: {
      entity: "&#43",
      unicode: "\u002b",
    },
    minus: {
      entity: "&#8722",
      unicode: "\u2212",
    },
  };
  return (
    <div className="item-cost flex-20 expense fa-3x flex-center">
      <span>
        {/* Here money is from ItemsList in expenses. the constant we created. */}
        {(props.money.income && sign.plus.unicode) || sign.minus.unicode} {props.money.amount}€
      </span>
      <FontAwesomeIcon icon={props.money.income && faCircleUp || faCircleDown} className="m-left-20 light-bill" />
    </div>
  );
}

export default ItemCost;
