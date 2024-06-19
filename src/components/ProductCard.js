import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

function ProductCard() {
  const [records, setRecords] = useState([]);
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const navigate = useNavigate();

  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const data = records.slice(firstIndex, lastIndex);

  const npage = Math.ceil(records.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        setRecords(products);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandle = (e) => {
    setValue(e.target.value);
  };

  const prePage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemClick = (item) => {
    navigate(`/product/${item.id}`, { state: { item, records } });
  };

  const handleDelete = (id) => {
    setRecords(records.filter((item) => item.id !== id));
  };

  const handleSearch = () => {
    const searchedItem = records.find(
      (item) => item.title.toLowerCase() === value.toLowerCase()
    );
    if (searchedItem) {
      navigate(`/product/${searchedItem.id}`, { state: { item: searchedItem, records } });
    } else {
      alert("Item not found!");
    }
  };

  const handleDropdownItemClick = (title) => {
    setValue(title);
  };

  return (
    <>
      <div className="sidebar_right">
        <div className="Search">
          <div className="search_bar">
            <input
              type="text"
              onChange={changeHandle}
              value={value}
              placeholder="search item"
            />
            <button type="button" onClick={handleSearch}>Search</button>
            <div className="dropdown_box">
              {value &&
                records
                  .filter(
                    (item) =>
                      item.title.toLowerCase().startsWith(value.toLowerCase()) &&
                      item.title.toLowerCase() !== value.toLowerCase()
                  )
                  .map((item, index) => (
                    <div
                      className="dropdown_item"
                      key={index}
                      onClick={() => handleDropdownItemClick(item.title)}
                    >
                      {item.title}
                      <hr />
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <table border="1" cellSpacing="0" width="80%">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Availability</th>
              <th>Price</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} onClick={() => handleItemClick(item)}>
                <td>{item.title}</td>
                <td>
                  <img
                    className="img_size"
                    src={item.images[0]} // Access the first image in the array
                    alt="Product"
                  />
                </td>
                <td>{item.availabilityStatus}</td>
                <td>{item.price}</td>
                <td>{item.review}</td>
                <td>
                  <button onClick={(e) => {e.stopPropagation(); handleDelete(item.id);}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link to="#" className="page-link" onClick={prePage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <Link to="#" className="page-item1" onClick={(e) => changeCPage(e, n)}>
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link to="#" className="page-link" onClick={nextPage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ProductCard;



