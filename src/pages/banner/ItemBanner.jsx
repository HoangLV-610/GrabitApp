// import Button from "../ui/button/Button";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button/Button";

const ItemBanner = (props) => {
  const { image, title, subTitle } = props;
  return (
    <div
      key={image}
      className="relative h-full w-full flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="content absolute top-1/2 -translate-y-1/2 left-[100px] max-w-[40%]">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-5 text-[20px] text-main leading-none font-medium"
        >
          {subTitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mb-[30px] text-[50px] leading-[68px] text-slate-gray tracking-[0.05rem] font-bold"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <Button icon={<ChevronsRight size={15} />} buttonType="buttonIcon">
            Show Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemBanner;
