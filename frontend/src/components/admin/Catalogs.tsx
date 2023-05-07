import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  releaseYear: number;
  createdAt: string;
  images: [
    {
      base64: string;
      name: string;
      _id: string;
    }
  ];
}

interface FileObject {
  base64: string;
  name: string;
}

const Catalogs = () => {
  const [productsArr, setProductsArr] = useState<Product[]>([]);
  // const [endArr, ]

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4200/eduard/products");
      const data = await response.json();
      const newAr = data;
      console.log(newAr.slice(0, 5));
      setProductsArr(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [x, setX] = useState<string>("");
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number>(0);
  const [files, setFiles] = useState<FileObject[]>([]);

  const handleAddedFiles: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const fileList = e.target.files;

    if (fileList) {
      const fileArray = Array.from(fileList);
      const base64Array: FileObject[] = [];

      for (let i = 0; i < fileArray.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(fileArray[i]);
        reader.onload = () => {
          const base64string = reader.result as string;
          const fileObject: FileObject = {
            base64: base64string,
            name: fileArray[i].name,
          };

          base64Array.push(fileObject);

          if (base64Array.length === fileArray.length) {
            setFiles(base64Array);
          }
        };
      }
    }
  };

  const addNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch("http://localhost:4200/eduard/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: x,
          price: y,
          releaseYear: z,
          images: files,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(files);
  console.log(productsArr);

  return (
    <div className="catalog-panel">
      <h2>Catalog - Products</h2>
      {/* all products */}
      <div className="products">
        <p>All Products</p>
        <input type="text" placeholder="Search product" />

        {productsArr.length > 0 ? (
          <ul className="products__list">
            {productsArr.map((item) => (
              <li key={item._id} className="products__list--item" id={item._id}>
                <div className="product-details">
                  <p className="product-details--id">ID: {item._id}</p>
                  <p className="product-details--name">Name: {item.name}</p>
                  <p className="product-details--price">Price: {item.price}</p>
                  {/* <p>Release Year: {item.releaseYear}</p>
                  <p>Created At: {item.createdAt}</p> */}
                  <p className="product-details--status">Status: Online</p>
                  <a href="#">DETAILS</a>
                </div>
                {/* create a container with images of current product */}
                {/* {item.images.length > 0 ? (
                  <div className="product-images">
                    {item.images.map((img) => (
                      <img key={img._id} src={img.base64} alt="img" />
                    ))}
                  </div>
                ) : (
                  ""
                )} */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </div>

      {/* add new product */}
      <h2>Add a new Product</h2>
      <form onSubmit={addNewProduct}>
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          onChange={(e) => setX(e.target.value)}
          value={x}
        />

        <label>Price</label>
        <input
          required
          type="number"
          name="price"
          onChange={(e) => setY(Number(e.target.value))}
          value={y ? y : ""}
        />

        <label>Release Year</label>
        <input
          required
          type="number"
          name="releaseYear"
          onChange={(e) => setZ(Number(e.target.value))}
          value={z ? z : ""}
        />

        <label>Product Images</label>
        <input
          required
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleAddedFiles}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default Catalogs;
