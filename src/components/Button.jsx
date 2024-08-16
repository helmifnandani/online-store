import Icon from "./Icons";
import { Link } from "react-router-dom";

const Button = ({
  isLink,
  type = "primary",
  text,
  urlTarget = "#",
  iconName,
  iconWidth = 20,
  onClick,
  btnWidth = "w-auto",
  isPill = false,
  className,
  style,
}) => {
  let btnStyle = `flex gap-2 items-center justify-center text-center text-sm font-medium transition-all ease-linear ${btnWidth} `;
  switch (type) {
    case "primary":
      btnStyle +=
        "px-5 py-2.5 bg-slate-900 text-white hover:bg-gray-700 focus:outline-none ";
    case "outline":
      btnStyle +=
        "px-5 py-2.5 hover:bg-gray-300 border border-slate-900 text-slate-900 ";
    case "link":
      btnStyle += "menu-item ";
  }

  if (isPill) btnStyle += "rounded-full ";

  btnStyle += ` ${className}`;

  return (
    <>
      {isLink ? (
        <Link to={urlTarget} className={btnStyle} style={style}>
          {iconName && (
            <span>
              <Icon name={iconName} width={iconWidth} />
            </span>
          )}
          <span className="btn-text">{text}</span>
        </Link>
      ) : (
        <button onClick={onClick} className={btnStyle} style={style}>
          {iconName && (
            <span>
              <Icon name={iconName} width={iconWidth} />
            </span>
          )}
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
