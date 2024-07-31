import React, { useEffect, useState } from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';
function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("there is something wrong");
      });
  }, []);

  return (
    <div>
        
      <h1><ReviewsIcon />List of all the products</h1>
      <table class="table table-bordered table-warning">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th colSpan={2}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ecom) => (
            <tr key={ecom.id}>
              <td>{ecom.id}</td>
              <td>{ecom.title}</td>
              <td>RM{ecom.price}</td>
              <td>{ecom.description}</td>
              <td>{ecom.category}</td>
              <td>
                <img src={ecom.image} style={{ width: "30px" }} alt={ecom.title} />
              </td>
              <td>{ecom.rating.rate}</td>
              <td>{ecom.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;