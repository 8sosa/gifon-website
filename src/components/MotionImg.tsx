"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type MotionImgProps = ComponentProps<typeof motion.img>;

const MotionImg = (props: MotionImgProps) => {
  return <motion.img {...props} />;
};

export default MotionImg;
