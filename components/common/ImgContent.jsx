import { styles } from "@/utils/styles";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "@/utils/motion";

const ImgContent = ({ img, title1, title2, children }) => {
  return (
    /*  <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row my-10  mx-6 max-w-7xl"
    >
      <motion.div
        className="md:w-1/2  flex items-center justify-center"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <img
          src={img}
          width={500}
          height={300}
          alt="image description"
          className="rounded-3xl  object-contain  "
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 max-w-[500px] "
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <div className="text-center mb-10">
          <p className="md:text-2xl text-xl text-gray-400 font-bold capitalize">
            {title1}
          </p>
          <p className={`${styles.titleText} capitalize`}>{title2}</p>
        </div>
        {children}
      </motion.div>
    </motion.div> */
    <h2>hola</h2>
  );
};

export default ImgContent;
