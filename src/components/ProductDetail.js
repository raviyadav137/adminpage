import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const { item, records } = location.state;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = () => {
      alert(`Added ${item.title} to cart!`);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    const searchedItem = records.find(
      (record) => record.title.toLowerCase() === searchValue.toLowerCase()
    );
    if (searchedItem) {
      navigate(`/product/${searchedItem.id}`, { state: { item: searchedItem, records } });
    } else {
      alert("Item not found!");
    }
  };

  const handleDropdownItemClick = (title) => {
    setSearchValue(title);
  };

  return (
    <div className="product-detail">
      <Link to="/product" className="back-link">
        &lt; Back to Products
      </Link>
      <div className="Search">
        <div className="search_bar">
          <input
            type="text"
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="search item"
          />
          <button type="button" onClick={handleSearchClick}>Search</button>
          <div className="dropdown_box">
            {searchValue &&
              records
                .filter(
                  (record) =>
                    record.title.toLowerCase().startsWith(searchValue.toLowerCase()) &&
                    record.title.toLowerCase() !== searchValue.toLowerCase()
                )
                .map((record, index) => (
                  <div
                    className="dropdown_item"
                    key={index}
                    onClick={() => handleDropdownItemClick(record.title)}
                  >
                    {record.title}
                    <hr />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="product-info">
        <h2>{item.title}</h2>
        <img
          className="img_size"
          src={item.images[0]} 
          alt="Product"
        />
        <p>Availability: {item.availabilityStatus}</p>
        <p>Price: {item.price}</p>
        <p>Review: {item.review}</p>
        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;