import React, { useEffect, useState } from "react";
import Product from "./product";

const ProductsCon = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const morningRoutine = JSON.parse(localStorage.getItem("morningRoutine")) || [];
    const nightRoutine = JSON.parse(localStorage.getItem("nightRoutine")) || [];

    const combinedRoutines = [...morningRoutine, ...nightRoutine];

    const allProducts = combinedRoutines
      .filter((step) => step.product && step.image)
      .map((step) => ({
        title: step.title,
        description: step.description,
        name: step.name,
        link: step.product.props.href,
        img: step.image,
      }));

    const uniqueProducts = Array.from(
      new Map(allProducts.map((item) => [item.name, item])).values()
    );

    setProductList(uniqueProducts);
    console.log("Unique Products:", uniqueProducts);
  }, []);

  return (
    <div className="flex flex-col border-[#EAEAEA] rounded-[24px] w-full max-h-[300px] overflow-y-auto">
      {productList.length > 0 ? (
        productList.map((product, index) => (
          <Product
            key={index}
            product={{
              img: product.img,
              title: product.title,
              description: product.description,
              link: product.link,
              name: product.name,
            }}
          />
        ))
      ) : (
        <p className="text-[12px] text-[#B1B1B1] p-4">No products found.</p>
      )}
    </div>
  );
};

export default ProductsCon;
