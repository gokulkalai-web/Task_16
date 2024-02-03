import PropTypes from "prop-types";
import data from "./product.json";
import { useState, createContext, useContext } from "react";
import styles from "./context.module.css";

const QuantityContext = createContext();

const Create = ({ item }) => {
  // Provider for the context  and we are passing the default values as 1
  return (
    <QuantityContext.Provider value={useState(1)}>  
      <p>${item}</p>
    </QuantityContext.Provider>
  );
};

Create.propTypes = {
  item: PropTypes.number,
};

const ContextElement3 = () => {
  // using the context value is use context 
  const [quantity] = useContext(QuantityContext);

  return (
    <div>
      <p>Selected Quantity: {quantity}</p>
    </div>
  );
};

const ContextElement2 = () => {
    //calling ContextElement2
    return (
        <>
          <ContextElement3 />
        </>
    )
}

const ContextElement1 = () => {
  //calling ContextElement2
    return (
    <>
      <ContextElement2 />;
    </>
  );
};

const MainContext = () => {
  const [itemprice, setItemprice] = useState(1);
  const [itemprice1, setItemprice1] = useState(1);
  const [itemprice2, setItemprice2] = useState(1);
  const [itemprice3, setItemprice3] = useState(1);
  const [itemprice4, setItemprice4] = useState(1);
  const handleChange = (e) => setItemprice(e.target.value);
  const handleChange1 = (e) => setItemprice1(e.target.value);
  const handleChange2 = (e) => setItemprice2(e.target.value);
  const handleChange3 = (e) => setItemprice3(e.target.value);
  const handleChange4 = (e) => setItemprice4(e.target.value);

  return (
    <div className={styles.container}>
      {data.products.map((item) => (
        <div key={item.title} className={styles.Alldata}>
          <img src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <select
            onChange={
              item.title == "iPhone 9"
                ? handleChange1
                : item.title == "iPhone X"
                ? handleChange2
                : item.title == "Samsung Universe 9"
                ? handleChange3
                : item.title == "OPPOF19"
                ? handleChange4
                : handleChange
            }
            value={
              item.title == "iPhone 9"
                ? itemprice1
                : item.title == "iPhone X"
                ? itemprice2
                : item.title == "Samsung Universe 9"
                ? itemprice3
                : item.title == "OPPOF19"
                ? itemprice4
                : itemprice
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <Create
            item={
              item.title == "iPhone 9"
                ? item.price * itemprice1
                : item.title == "iPhone X"
                ? item.price * itemprice2
                : item.title == "Samsung Universe 9"
                ? item.price * itemprice3
                : item.title == "OPPOF19"
                ? item.price * itemprice4
                : item.price * itemprice
            }
          >
            <ContextElement1 />
          </Create>
          <h4>
            <span>Sub Total: </span>
            <span style={{ float: "right", marginRight: 10 }}>
              $
              {item.title == "iPhone 9"
                ? item.price * itemprice1
                : item.title == "iPhone X"
                ? item.price * itemprice2
                : item.title == "Samsung Universe 9"
                ? item.price * itemprice3
                : item.title == "OPPOF19"
                ? item.price * itemprice4
                : item.price * itemprice}
            </span>
          </h4>
          <h4>
            <span>Total: </span>
            <span style={{ float: "right", marginRight: 10 }}>
              $
              {item.title == "iPhone 9"
                ? item.price * itemprice1
                : item.title == "iPhone X"
                ? item.price * itemprice2
                : item.title == "Samsung Universe 9"
                ? item.price * itemprice3
                : item.title == "OPPOF19"
                ? item.price * itemprice4
                : item.price * itemprice}
            </span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default MainContext;