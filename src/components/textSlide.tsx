import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

export default function TextSlide() {
  const data = [
    {
      id: 0,
      image: "https://i.ibb.co/Cpmp4p8X/Character-1.webp",
      backgroundColor: "linear-gradient(135deg, #938b66, #d4cfa8, #a29672)",
      titleColor: "#f9f7ec"
    },
    {
      id: 1,
      image: "https://i.ibb.co/tpLWhg0Q/Character-2.webp",
      backgroundColor: "linear-gradient(135deg, #c28958, #f2c79b, #a66d42)",
      titleColor: "#fff4e6"
    },
    {
      id: 2,
      image: "https://i.ibb.co/svdg8bxd/Character-3.webp",
      backgroundColor: "linear-gradient(135deg, #3a8769, #6fc2a2, #2d6b55)",
      titleColor: "#e3fff1"
    },
    {
      id: 3,
      image: "https://i.ibb.co/bjvRygjC/Character-4.webp",
      backgroundColor: "linear-gradient(135deg, #e96895, #ffbed4, #c44a6c)",
      titleColor: "#fff0f5"
    }
  ];
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const filteredData = data[currentCharacter];
  const previous = currentCharacter === 0 ? data[data.length - 1] : data[currentCharacter - 1];
  const next = currentCharacter === data.length - 1 ? data[0] : data[currentCharacter + 1];

  const handleNext = () => {
    setCurrentCharacter(next.id);
  }

  const handlePrevious = () => {
    setCurrentCharacter(previous.id);
  }

  const previousImageVariant = {
    initial: {x: 0, y: 0, opacity: 0},
    animate: {x: -60, y: 300, opacity: 1},
    exit: {x: 0, y: 0, opacity: 0}
  }

  const currentImageVariant = {
    initial: {x: 0, y: 500},
    animate: {x: 0, y: 120},
    exit: {x: 0, y: 0, scale: 1.125, opacity: 1, zIndex: 2}
  }

  const nextImageVariant = {
    initial: {x: 0, y: 0, opacity: 0},
    animate: {x: 0, y: 300, opacity: 1},
    exit: {x: 0, y: 0, opacity: 0}
  }

  const buttonVariant = {
    initial: {scale: 0, opacity: 0},
    animate: {scale: 1, opacity: 1},
    // exit: {scale: 0, opacity: 0},
    transition: {duration: 1.2, type: "spring"}
  }

  return (
    <div className="hero"
             style={{
               // background: filteredData.backgroundColor
             }}
    >
      <AnimatePresence mode='wait'>
        <motion.button
          className='back-arrow'
          variants={buttonVariant}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          // transition={"transition"}
          transition={{duration: 1.2, type: "spring"}}
          onClick={handlePrevious}
        ><ArrowForward/>
        </motion.button>
        <motion.button
          className='forward-arrow'
          variants={buttonVariant}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          transition={{duration: 1.2, type: "spring"}}
          onClick={handleNext}
        ><ArrowForward/></motion.button>
      </AnimatePresence>
      <div className="hero__models">
        <div className="hero__gallery">
          <AnimatePresence mode="popLayout">
            {/* Previous */}
            <motion.img
              key={previous.id}
              src={previous.image}
              alt={previous.image}
              className="hero__gallery-previous"
              variants={previousImageVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={handlePrevious}
              transition={{duration: 1.2, type: "spring"}}
            />

            {/* Current */}
            <motion.img
              key={filteredData.id}
              src={filteredData.image}
              alt={filteredData.image}
              className="hero__gallery-item--active"
              variants={currentImageVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{duration: 1.2, type: "spring"}}
            />

            {/* Next */}
            <motion.img
              key={next.id}
              src={next.image}
              alt={next.image}
              className="hero__gallery-next"
              variants={nextImageVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={handleNext}
              transition={{duration: 1.2, type: "spring"}}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>

  )
}
