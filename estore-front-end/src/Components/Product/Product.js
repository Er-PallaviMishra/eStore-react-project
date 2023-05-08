import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../../redux/actions/product/Product";
import "./_product.scss";

// const products = [
//     require("../../assets/img/shop-1.jpg"),
//     require("../../assets/img/shop-2.jpg"),
//     require("../../assets/img/shop-3.jpg"),
//     require("../../assets/img/shop-4.jpg"),
//     require("../../assets/img/shop-5.jpg"),
// ]

const Product = () => {
    const dispatch = useDispatch();
    const { product: { products } } = useSelector((obj) => obj);


    useEffect(() => {
        dispatch(actions.getProduct());
    }, [])

    return (
        <div className="row">
            {products.map((item, index) => (

            <div className="col-lg-4 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic">
                        <img className="product__item__pic" src={item.imageSrc} />
                        <ul className="product__hover">
                            <li>
                                <a href={item.imageSrc}>
                                    <span className="fa fa-arrows-alt" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">{item.name}</a>
                        </h6>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product__price">{item.price}</div>
                    </div>
                </div>
            </div>
            
            ))}
        </div>
    );

}

export default Product;