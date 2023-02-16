import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: "1", name: "Product 1"},
    {id: "2", name: "Product 2"},
    {id: "3", name: "Product 3"},
];

const Products = () => {

    const jsx = PRODUCTS.map((element) => {
        return <li><Link to={`/products/${element.id}`}>{element.name}</Link></li>
    });

    return (
        <Fragment>
            <p>Products page!</p>
            <ul>
                {jsx}
            </ul>
            <Link to='..' relative='path'>Back</Link>
        </Fragment>
    );
}

export default Products;