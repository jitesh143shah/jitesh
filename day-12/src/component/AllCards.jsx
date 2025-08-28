import React from "react";

function AllCards({ filterData }) {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-aroundw-[80%] gap-10 mb-10">
        {filterData.map((sindleItem) => {
          return (
            <div
              key={sindleItem.id}
              className="bg-blue-400/30 w-[25%] max-h-[500px] p-4 rounded-xl shadow-xl
              mx-auto"
            >
              <img src={sindleItem.thumbnail} alt={sindleItem.brand} />
              <div className="flex items-center justify-between ">
                <h2 className="text-left my-5 text-xl line-clamp-1">
                  {sindleItem.title}
                </h2>
                <p className="text-4xl ">${sindleItem.price}</p>
              </div>
              <p className="text-left line-clamp-1 lg:line-clamp-2">
                {sindleItem.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllCards;
