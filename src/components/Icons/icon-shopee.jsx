const SVG = ({
  style = {},
  fill = "#202225",
  width = "32",
  height = "32",
  className = "",
  viewBox = "0 0 32 32",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    stroke="none"
    fill={fill}
  >
    <path
      fill="currentColor"
      d="M26.827 10.107h-5.453c-0.173-1.827-0.68-3.48-1.427-4.733-0.987-1.667-2.373-2.707-3.947-2.707s-2.96 1.027-3.947 2.707c-0.733 1.267-1.253 2.907-1.427 4.733h-5.453c-0.64 0-1.213 0.533-1.173 1.173l1.107 15.080c0.12 1.627 1.147 2.973 3.093 2.973h15.613c1.747 0 2.947-1.080 3.093-2.973l1.093-15.093c0.053-0.64-0.533-1.16-1.173-1.16zM13.227 6.053c0.733-1.267 1.72-2.040 2.773-2.040s2.027 0.787 2.76 2.040c0.627 1.080 1.067 2.48 1.227 4.067h-7.987c0.173-1.573 0.6-2.987 1.227-4.053v-0.013zM19.88 22.867c-0.080 0.293-0.213 0.6-0.387 0.893-0.040 0.067-0.067 0.107-0.093 0.147-0.64 0.947-1.627 1.427-2.827 1.427-1.12 0-2.427-0.413-3.813-1.267-0.173-0.093-0.347-0.213-0.533-0.333-0.24-0.16-0.307-0.493-0.133-0.733 0.16-0.24 0.493-0.307 0.733-0.133 0.147 0.107 0.307 0.213 0.48 0.307 1.213 0.747 2.333 1.107 3.253 1.107 0.84 0 1.52-0.32 1.96-0.96 0.013-0.027 0.027-0.040 0.040-0.053 0-0.013 0.027-0.027 0.027-0.040 0.12-0.2 0.213-0.413 0.28-0.627 0.12-0.427 0.107-0.88-0.067-1.28-0.187-0.427-0.547-0.827-1.107-1.173-0.373-0.227-0.84-0.427-1.387-0.587-1.413-0.4-2.467-0.973-3.027-1.733-0.627-0.84-0.667-1.853 0-3.080 0.44-0.813 1.347-1.32 2.493-1.413 0.987-0.080 2.173 0.16 3.373 0.773 0.267 0.133 0.36 0.453 0.227 0.72s-0.453 0.373-0.707 0.227c-1.027-0.533-2-0.733-2.813-0.667-0.773 0.067-1.373 0.373-1.627 0.853-0.44 0.813-0.44 1.453-0.080 1.933 0.413 0.56 1.28 1 2.467 1.333 0.653 0.187 1.2 0.427 1.653 0.707 0.747 0.453 1.253 1.027 1.52 1.653 0.28 0.64 0.307 1.32 0.12 1.987l-0.027 0.013z"
    ></path>
  </svg>
);

export default SVG;
