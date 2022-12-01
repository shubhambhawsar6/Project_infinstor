import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id , title,  price, discountPercentage, rating, stock, brand,  category} = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div>
          <table>
          <thead>
            <tr>
              
              <th>Product Name</th>
              <th>price</th>
              <th>Discounted percentage</th>
              <th>rating</th>
              <th>stock</th>
              <th>brand</th>
              <th>category</th>
              
            </tr>
          </thead>
            <tbody>
              <tr onClick={this.handleClick.bind(this)}>
                <td>{title}</td>
                <td>$ {price}</td>
                <td>{discountPercentage}</td>
                <td>{rating}</td>
                <td>{stock}</td>
                <td>{brand}</td>
                <td>{category}</td>
              </tr>
            </tbody>
        </table>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;