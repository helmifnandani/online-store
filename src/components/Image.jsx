const Image = ({
  ratio = "aspect-16x9",
  imgSrc,
  objectFit = "object-cover",
  text,
  className,
}) => {
  return (
    <>
      <img
        className={`relative ${objectFit} ${ratio} ${text ? "bg-gray-300" : ""} ${className}`}
        src={imgSrc}
      />
      {text ? (
        <>
          <div className="absolute inset-0 bg-gray-400 opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-sm font-bold text-white md:text-3xl">{text}</h2>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Image;
