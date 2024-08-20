import { Link } from "react-router-dom";
import Button from "./Button";

const Image = ({
  ratio = "aspect-16x9",
  imgSrc,
  objectFit = "object-cover",
  text,
  className = "",
  btnIsLink,
  btnType,
  hasButton,
  btnUrlTarget,
  btnClassName = "",
}) => {
  return (
    <>
      <img
        className={`relative ${objectFit} ${ratio} ${text ? "bg-gray-300" : ""} ${className}`}
        src={imgSrc}
      />
      {hasButton ? (
        <Button
          isLink={btnIsLink}
          type={btnType}
          text={"View More"}
          urlTarget={btnUrlTarget}
          className={`${btnClassName} absolute inset-0 top-1/2 m-auto h-12 w-32 border-white text-white`}
        />
      ) : (
        ""
      )}
      {text ? (
        <Link to={btnUrlTarget}>
          <div className="absolute inset-0 bg-gray-400 opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white md:text-3xl">{text}</h2>
          </div>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default Image;
