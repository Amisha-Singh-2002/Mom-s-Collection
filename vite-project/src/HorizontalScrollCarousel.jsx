import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Data from "./Data.json";
const Example = () => {
  return (
    <div className="bg-white-100">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {Data.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[300px] overflow-hidden rounded-xl shadow-lg bg-white"
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
      ></div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-900 to-transparent p-4 z-10 text-white">
        <p className="text-sm font-semibold text-purple-300">Jewellery</p>
        <h3 className="text-lg font-bold">{card.name}</h3>
        <p className="text-sm mt-2">₹{card.price}</p>
        <button onClick={()=>{
          window.location.href=`/product/${card.id}`
        }} className="mt-3 px-4 py-1 bg-white text-black text-sm rounded hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
  );
};


export default Example;

