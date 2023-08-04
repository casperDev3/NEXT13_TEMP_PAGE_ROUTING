import React from "react";
// import styles
import style from "./single.module.scss";

interface SingleProductProps {
  slug: string;
}

const SingleProduct = ({ slug }: SingleProductProps) => {
  // code will run on the client
  return (
    <>
      <div className={style.single}>SINGLE PRODUCT PAGE - {slug}</div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  // code will run on the server
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

export default SingleProduct;
