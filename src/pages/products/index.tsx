import React from "react";
import Link from "next/link";
// import styles
import style from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={style.products}>PRODUCTS PAGE</div>
      <Link href="/products/product-one">Product 1</Link>
      <Link href="/products/products-two">Product 2</Link>
    </>
  );
};

export default Products;
