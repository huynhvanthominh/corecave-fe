import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import topSellerData from "../assets/fake-data/data-top-seller";
import popularCollectionData from "../assets/fake-data/data-popular-collection";
import TopMine from "./../components/layouts/card/TopMine";
import { ranking } from "../apis/transaction";

const MiningPage = () => {
  const [data] = useState(popularCollectionData);

  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const [topCollection, setTopCollection] = useState([]);
  async function fetchTopCollection() {
      const {data} = await ranking();
      setTopCollection(data.items);
  }
  useEffect(() => {
      fetchTopCollection();
  }, []);
  // console.log(topCollection);
  return (
    <div className="authors">
      <Header />
      <section className="flat-title-page inner">
        {/* <div className="overlay"></div>
        <div className="themesflat-container"></div> */}

        <div className="themesflat-container ">
          <div className="wrap-heading flat-slider">
            <div className="bottom-content">
              <div className="bt-content-left">
                <h2 className="bottom-title ">
                  Change The World for Better Futures
                </h2>
                <p className="sub-bottom-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </div>
              <div className="bt-content-right">
                <div className="row-content">
                  <div className="item">
                    <h2 className="title-slider-bt">4,556 </h2>
                    <p className="sub-title">Core Changers</p>
                  </div>
                  <div className="item">
                    {" "}
                    <h2 className="title-slider-bt">874</h2>
                    <p className="sub-title">Mined Projects</p>
                  </div>
                  <div className="item">
                    {" "}
                    <h2 className="title-slider-bt">$ 195,234k</h2>
                    <p className="sub-title">Mined Value</p>
                  </div>
                </div>
                <div className="bor"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopMine data={topCollection} />

      <section className="tf-section our-creater dark-style2">
        <div className="_container">
          <div className="item-mine-top">
            <div className="title-name">
              <p>Name</p>
            </div>
            <ul className="title-value">
              <li>
                <p>Mined Year </p>
              </li>
              <li>
                <p>Mined Value </p>
              </li>
              <li>
                <p>Mined Power </p>
              </li>
            </ul>
            <button className="sc-button  style-button style-status">
              <p>Status</p>
            </button>
          </div>
          <div className="item-mine-bottom">
            <div className="item-first">
              <img src="" alt="" className="img-item" />
              <div className="item-content">
                <p className="title-name-bottom">AgriMatix</p>
                <p className="title-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem{" "}
                </p>
                <p className="title-local">New York, London</p>
              </div>
            </div>
            <ul className="title-value">
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
            </ul>
            <div className="item-status">
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
            </div>
          </div>
          <div className="item-mine-bottom">
            <div className="item-first">
              <img src="" alt="" className="img-item" />
              <div className="item-content">
                <p className="title-name-bottom">AgriMatix</p>
                <p className="title-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem{" "}
                </p>
                <p className="title-local">New York, London</p>
              </div>
            </div>
            <ul className="title-value">
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
            </ul>
            <div className="item-status">
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
            </div>
          </div>
          <div className="item-mine-bottom">
            <div className="item-first">
              <img src="" alt="" className="img-item" />
              <div className="item-content">
                <p className="title-name-bottom">AgriMatix</p>
                <p className="title-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem{" "}
                </p>
                <p className="title-local">New York, London</p>
              </div>
            </div>
            <ul className="title-value">
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
              <li>
                <p className="item-second">2022</p>
              </li>
            </ul>
            <div className="item-status">
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
              <button className="sc-button  style-button style-status">
                <p>Status</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MiningPage;
