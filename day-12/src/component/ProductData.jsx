import { useEffect, useState } from "react";
import AllCards from "./AllCards";

const ProductData = () => {
  const [filterData, setFilterData] = useState("");
  const [initialData, setInitialData] = useState("");
  const [val, setVal] = useState("");
  useEffect(() => {
    async function fetchProductData() {
      let res = await fetch("https://dummyjson.com/products");
      let json = await res.json();
      setInitialData(json.products);
      setFilterData(json.products);
    }
    fetchProductData();
  }, []);
  function filterHandler() {
    let res = initialData.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterData(res);
  }
  return (
    <>
      <div
        className="bg-gray-300 text-center min-h-screen max-w-[100vw]
      overflow-x-hidden flex flex-col items-center"
      >
        <h1 className=" text-3xl pt-10 md:text-5xl">Product Data</h1>
        <div className="mt-10">
          <input
            type="text"
            onChange={(e) => {
              setVal(e.target.value);
            }}
            className="p-3 border-2 rounded-tl-3xl rounded-bl-3xl
            focus:outline-none md:pr-[90px ] md:pl-[20px]"
          />
          <button
            className="p-3 px-7 bg-green-500 rounded-tr-3xl rounded-br-3xl border-2 md:px-[20px]"
            onClick={filterHandler}
          >
            Search
          </button>
          {filterData.length <= 0 ? (
            <h1 className="text-6xl mt-32">No items</h1>
          ) : (
            <AllCards filterData={filterData} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductData;
