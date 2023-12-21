import { useState, forwardRef } from "react";
import images from "@/assets/image";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
  (
    { src, alt, className, fallback: customFalback = images.image, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFalback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        {...props}
        src={fallback || src}
        alt={alt}
        onError={handleError}
      />
    );
  }
);
export default Image;
