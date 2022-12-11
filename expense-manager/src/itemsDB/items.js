import {
  faSquare,
  faCircle,
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
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
// Creating classes to export. It's a select list.
export const classes = {
  incoming: {
    bgColor: "light-incoming",
    color: "incoming",
  },
  outgoing: {
    bgColor: "light-outgoing",
    color: "outgoing",
  },
  transfer: {
    bgColor: "light-transfer",
    color: "transfer",
  },
  house: {
    bgColor: "light-house",
    color: "house",
  },
  gas: {
    bgColor: "light-gas",
    color: "gas",
  },
  entertainment: {
    bgColor: "light-entertainment",
    color: "entertainment",
  },
};

export const itemsList = [
  {
    icons: [faCircle, faUtensils],
    classes: classes.outgoing,
    data: {
      title: "Eating out",
      date: new Date(Date.now()).toLocaleDateString(),
    },
    money: {
      amount: 20,
      income: false,
    },
  },
];
