import { useSelector } from "react-redux";
import Loading from "./Loading";

const LoadingOverlay = () => {
  const isLoading = useSelector((state) => state.loadingSlice.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
