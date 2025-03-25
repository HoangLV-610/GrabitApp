import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HashLoader color="#5CAF90" size={60} />
    </div>
  );
};

export default Loading;
