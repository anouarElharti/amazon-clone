import Header from "../Header/Header";
import Product from "../Product/Product";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="homeContainer">
          <img
            src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
            alt="amazon"
            className="homeImg"
          />
          <div className="home_row">
            <Product
              id="9213343"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={185.65}
              rating={4}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
            <Product
              id="1213873"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={215.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="12343"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={45.75}
              rating={3}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
            <Product
              id="12133"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={15}
              rating={1}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
            <Product
              id="1343"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={95.25}
              rating={3}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="121343"
              title="(2 Pack) Authentic Official T-Mobile SIM Card Micro/Nano/Standard GS…"
              price={19.87}
              rating={2}
              image="https://m.media-amazon.com/images/I/71CxtxJYzqL._AC_SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
