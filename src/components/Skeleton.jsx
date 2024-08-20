const Skeleton = ({
  className = "h-full w-full",
  items = 1,
  classContainer = "",
}) => {
  return (
    <div className="animate-pulse">
      <div className={classContainer}>
        {(() => {
          const elements = [];
          for (let i = 0; i < items; i++) {
            elements.push(
              <div key={i} className={`${className} bg-gray-300`}></div>,
            );
          }
          return elements;
        })()}
      </div>
    </div>
  );
};

export default Skeleton;
