import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import Item7 from "../../images/item7.jpg";
import Item8 from "../../images/item8.jpg";
import Item9 from "../../images/item9.jpg";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Surgical Gowns",
      desc:
        "Made of a sturdy 55% cotton / 45% polyester blend Tie closure in the neck & lower back area One size fits most- Gown can be autoclave up to 275 degrees Washable/Reusable, One Size Fits all",
      price: 21,
      img: Item1
    },
    {
      id: 2,
      title: "Burn Dressing",
      desc: "WATER GEL BURN DRESSING 4 x 4 ( 10CM X 10CM ) USA",
      price: 1015,
      img: Item2
    },
    {
      id: 3,
      title: "Examination gloves",
      desc:
        "Color: BLUE Nitrile Gloves 100% Latex Free/Powder Free Sizes: XS – 2X Large Packaging: 100/BX 10BX/CS (1,000 PCS/CS ",
      price: 24,
      img: Item3
    },
    {
      id: 4,
      title: "Eye DCR 20PCS",
      desc:
        "Depending on the cause of your blocked tear duct, you may need DCR This is designed for highly professionals with graded material",
      price: 120,
      img: Item4
    },
    {
      id: 5,
      title: "Sterelization paper",
      desc:
        "STERILIZATION PAPER HEAT SEALING FLAT SEAL 350mm X 200mm YIPAK CHINA",
      price: 70,
      img: Item5
    },
    {
      id: 6,
      title: "Lab Coat Male ",
      desc: "LAB COAT K.T WHITE MALE LARGE",
      price: 350,
      img: Item6
    },
    {
      id: 7,
      title: "Lab Coat FMale ",
      desc: "LAB COAT K.T WHITE FMale LARGE",
      price: 370,
      img: Item7
    },
    {
      id: 8,
      title: "Human Skeleton ",
      desc: "LAB COAT K.T WHITE FMale LARGE",
      price: 37000,
      img: Item8
    },
    {
      id: 9,
      title: "Thermometer",
      desc:
        "THERMOMETER HYGROMETER - TEMPERATURE HUMIDITY CLOCK - HTC-1 DIGITAL",
      price: 1100,
      img: Item9
    }
  ],
  addedItems: [],
  total: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 2.8
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 2.8
    };
  }

  return state;
};

export default cartReducer;
