/* eslint-disable react/prop-types */
import Product from "./Product";
import "./ProductList.css";
const ProductList = ({ data, deleteProduct }) => {
  // console.log(data);
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Cloth Id</th>
            <th>Cloth Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>Size</th>
            <th>Manufacture date</th>
            <th>Description</th>
            <th>Condition</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((product, index)=>(
              <Product key={index} id={index} product={product} deleteProduct={deleteProduct} />
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="10">
              <button>Remove all product</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductList;
