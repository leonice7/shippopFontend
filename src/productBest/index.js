import React from "react";
import Slider from "react-slick";
import './best.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";

function Index() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <>
            <div className="row">
                <div className="col">
                    <p className="txt">สินค้าขายดี</p>
                </div>
                <div className="allP col text-right">
                    <a href="#">สินค้าขายดี</a>
                </div>

            </div>
        <div className="containers">
        <Slider {...settings}>

            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="cards">
                    <div className="titlesale">
                        <AiFillCheckCircle />
                        <p className="txts">มีสินค้า</p>
                    </div>
                    <div className="card-image">
                        <img src={"c1.jpg"} />
                    </div>
                    <ul className="btn-add">
                        <li>
                            <a href="#">สั่งซื้อสินค้า</a>
                        </li>
                    </ul>
                    <div className="review">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <a href="#">reviews(4)</a>
                    </div>
                    <div className="detail">
                        <p>Booking</p>
                    </div>
                    <div className="price-sale">
                        <p>THB 599.00</p>
                    </div>
                    <div className="price">
                        <p>THB 499.00</p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
        </>
    );
}

export default Index;
