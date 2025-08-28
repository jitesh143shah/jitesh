import { TbFaceIdError } from "react-icons/tb";

const PageNotFound = () => {
  return (
    <>
      <div>
        <div
          className="flex flex-col gap-10  justify-center items-center bg-red-100 w-full h-full
        text-6xl  p-20"
        >
          <TbFaceIdError />
          <div>Page Not Found</div>
          <div>404 Error!!!</div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
