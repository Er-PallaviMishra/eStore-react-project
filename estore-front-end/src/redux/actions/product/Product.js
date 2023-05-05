import * as actionTypes from "./types";

const productcategories = [{
    Id: 1,
    Category: "kids",
    SubCategory: [{
        Id: 1,
        Name: "Dresses",
    },
    {
        Id: 2,
        Name: "Footwears",
    }, {
        Id: 3,
        Name: "accessories",
    }]
},
{
    Id: 2,
    Category: "Men",
    SubCategory: [{
        Id: 1,
        Name: "Dresses",
    },
    {
        Id: 2,
        Name: "Footwears",
    }, {
        Id: 3,
        Name: "accessories",
    }]
}]

const product = [{
    Id: 1,
    imageSrc:require('../../../assets/img/shop-1.jpg'),
    name: "product 1",
    price: "Rs 1000.00"

},
{
    Id: 2,
    imageSrc: require("../../../assets/img/shop-2.jpg"),
    name: "product 2",
    price: "Rs 2000.00"

},
{
    Id: 3,
    imageSrc: require("../../../assets/img/shop-5.jpg"),
    name: "product 3",
    price: "Rs 2500.00"

}
]

export const getProductcategories = () => async (dispatch) => (

    dispatch({
        type: actionTypes.PRODUCT_CATEGORY,
        data: productcategories
    })

)

export const getProduct = () => async (dispatch) => (

    dispatch({
        type: actionTypes.PRODUCT,
        data: product
    })

)