import * as actionTypes from "./types";
import axios from "axios";

export const getProductcategories = () => async (dispatch) => {

    let productcategories = [];

    await axios({
        method: "get",
        url: "http://localhost:5001/product/api/getCategories"
    }).then((res) => {

        let parentCategory = res.data.data.filter(x => x.parentcategoryid === null);

        parentCategory.map((item) => {
            let t = {
                Id: item.id,
                Category: item.category,
                SubCategory: res.data.data
                    .filter(x => x.parentcategoryid === item.id)
                    .map(y => {
                        return {
                            Id: y.id,
                            Name: y.category
                        }
                    })
            }
            return productcategories.push(t);
        })

    }).catch((err) => {
        console.log("response error-", err);
    })

    dispatch({
        type: actionTypes.PRODUCT_CATEGORY,
        data: productcategories
    })

}

export const getProduct = () => async (dispatch) => {

    await axios({
        method: "get",
        url: "http://localhost:5001/product/api/getProducts"
    }).then((res) => {

        try {
            let productList = res.data.data.map((item) => {
                return {
                    Id: item.id,
                    imageSrc: `http://localhost:5001/${item.product_img}`,
                    name: item.product_name,
                    price: item.price
                }
            })
            dispatch(_getProducts(productList));

        } catch (ex) {
            console.log(ex);
        }

    }).catch((err) => {
        console.log("response error-", err);
    })

}
export const _getProducts = (data) => {
    return {
        type: actionTypes.PRODUCT,
        data: data
    }
}