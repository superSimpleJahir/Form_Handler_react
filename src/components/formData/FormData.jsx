
import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { getDataFromLocalStorase } from "../../assets/utils/getDatafromlocalstorase";

const FormData = () => {
  const [data, setData] = useState(getDataFromLocalStorase());

  const formData = {};

  const formHandler = (e) => {
    e.preventDefault();

    const formElements = e.target.elements;

    for (const element of formElements) {
      //! get value input fields
      if (element.type !== "submit") {
        if (element.type === "radio") {
          if (element.checked === true) {
            formData[element.name] = element.value;
          }
        } else if (element.checked) {
          formData[element.name] = element.checked;
        } else if (element.checked !== true) {
          formData[element.name] = element.checked;
        } else {
          formData[element.name] = element.value;
        }
        formData[element.name] = element.value;

        //! input fields is emtay
        element.value = "";
      }
    }

    setData([...data, formData]);
  };

  // dat set localStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Delete Product from list
  const deleteProduct = (id) => {
    const filterItem = data.filter((value, index) => id !== index);
    setData(filterItem);
  };

  return (
    <section>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="ClothId">
            Cloth Id:
            <input type="text" name="ClothId" id="ClothId" required />
          </label>
        </div>

        <div>
          <label htmlFor="ClothName">
            Cloth Name:
            <input type="text" name="ClothName" id="ClothName" required />
          </label>
        </div>

        <div>
          <label htmlFor="Price">
            Price:
            <input type="text" name="Price" id="Price" required />
          </label>
        </div>

        <div>
          <label htmlFor="Quantity">
            Quantity:
            <input type="text" name="Quantity" id="Quantity" required />
          </label>
        </div>

        <div>
          <label htmlFor="colors">
            Color select:
            <select name="colors" id="colors" required>
              <option value="">select your color</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="Size">
            Please sleect Size:
            <input type="radio" name="Size" id="SizeM" value="M" required /> M
            <input type="radio" name="Size" id="SizeL" value="L" required /> L
            <input type="radio" name="Size" id="SizeXL" value="XL" required /> XL
          </label>
        </div>

        <div>
          <label htmlFor="ManufactureDate">
            Manufacture date:
            <input type="date" name="ManufactureDate" id="ManufactureDate" required />
          </label>
        </div>

        <div>
          <label htmlFor="Description">
            Description:
            <textarea name="Description" id="Description" required />
          </label>
        </div>

        <div>
          <label htmlFor="TandC">
            Terms and condition:
            <input type="checkbox" name="TandC" id="TandC" required />
          </label>
        </div>
        <button>Add file</button>
      </form>
      {
        data.length &&<ProductList data={data} deleteProduct={deleteProduct} />
      }
    </section>
  );
};

export default FormData;
