import ClipLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.container}>
      <ClipLoader color="green" size={50} />
    </div>
  );
};

export default Loader;
