import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackToHome = () => {
  return (
    <div className="flex">
      <Link
        to={"/"}
        className="border rounded-full px-4 py-2 flex items-center transition-all duration-300 ease-in-out hover:bg-sky-800 hover:text-white"
      >
        <BsArrowLeft className="text-2xl" />
        <span className="ml-2">Back</span>
      </Link>
    </div>
  );
};

export default BackToHome;
