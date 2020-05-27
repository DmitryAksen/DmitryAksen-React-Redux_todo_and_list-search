import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];


function FilterableProductTable() {
    const [products] = useState(data);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(false);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleChnageStatus = () => {
        setStatus(!status);
    }

    return (
        <div>
            <SearchBar handleChange={handleChange} handleChnageStatus={handleChnageStatus} title={title} />
            <ProductTable products={
                //in func separate
                status ? products.filter((product) => { return product.stocked === status && product.name.toLowerCase().includes(title.toLowerCase()) }) :
                    products.filter((product) => { return product.name.toLowerCase().includes(title.toLowerCase()) })} />
        </div>
    )
}


// const ProductTable = ({ products }) => {

//     const createRows = (filteredArr) => {
//         return filteredArr.map((product, index) => {
//             return <ProductRow name={product.name} price={product.price} key={index} />
//         })
//     }

//     return (
//         <table>
//             <thead>
//                 <ProdctCategoryRow />
//             </thead>
//             <tbody>

//                 {
//                     createRows(products.filter((product) => { return product.category === "Sporting Goods" }))
//                 }

//                 { createRows(products.filter((product) => { return product.category === "Electronics" }))}

//             </tbody>
//         </table>
//     )
// }

export default FilterableProductTable
