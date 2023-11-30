/* eslint-disable react/prop-types */
const Product = ({ id, product,deleteProduct }) => {
  const { ClothId, ClothName, Price, Quantity, colors, Size, ManufactureDate, Description, TandC } =
    product;
  return (
    <>
      <tr>
        <td>{ClothId}</td>
        <td>{ClothName}</td>
        <td>{Price} </td>
        <td>{Quantity}</td>
        <td>{colors}</td>
        <td>{Size}</td>
        <td>{ManufactureDate}</td>
        <td>{Description}</td>
        <td>{TandC}</td>
        <td id={id} onClick={()=>deleteProduct(id)} >Delete</td>
      </tr>
    </>
  );
};

export default Product;
