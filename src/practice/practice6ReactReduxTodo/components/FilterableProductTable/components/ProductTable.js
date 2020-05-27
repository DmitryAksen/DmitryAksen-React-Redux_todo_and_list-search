import React from 'react';
import ProductRow from './ProductRow';
import ProdctCategoryRow from './ProdctCategoryRow';


const ProductTable = ({ products }) => {

    const createRows = (filteredArr) => {
        return filteredArr.map((product, index) => {
            return <ProductRow name={product.name} price={product.price} key={index} />
        })
    }

    return (
        <table>
            <thead>
                <ProdctCategoryRow />
            </thead>
            <tbody>

                {
                    createRows(products.filter((product) => { return product.category === "Sporting Goods" }))
                }

                { createRows(products.filter((product) => { return product.category === "Electronics" }))}

            </tbody>
        </table>
    )
}

export default ProductTable
