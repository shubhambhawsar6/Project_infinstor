import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = Object.values(products).map((product) => {
    const { id , title,  price, discountPercentage, rating, stock, brand,  category} = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div>
            <div className="meta">
              <h4>Title{title}</h4>
            </div>
            <div className="meta">
              <h4>Price</h4>{price}
            </div>
            <div className="meta">
              <h4>discountPercentage</h4>{discountPercentage}
            </div>
            <div className="meta">
              <h4>rating</h4>{rating}
            </div>
            <div className="meta">
              <h4>stock</h4>{stock}
            </div>
            <div className="meta">
              <h4>brand</h4>{brand}
            </div> 
            <div className="meta">
              <h4>category</h4>{category}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
