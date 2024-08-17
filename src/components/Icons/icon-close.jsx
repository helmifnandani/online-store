const SVG = ({
  style = {},
  fill = "#202225",
  className = "",
  viewBox = "0 0 24 24",
}) => (
  <svg
    width="100%"
    style={style}
    height="100%"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default SVG;
