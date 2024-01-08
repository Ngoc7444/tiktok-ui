import { useState, forwardRef } from "react";
import images from "@/assets/image";
import styles from "./Image.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = images.image, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
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

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;
