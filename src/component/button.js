import PropTypes from "prop-types";
const Button = ({
  title = "button",
  color = "blue",
  size = "sm",
  handleClick,
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor: color,
    color: "white",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };

  return (
    <>
      <button style={style} onClick={handleClick}>
        {title}
      </button>
    </>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(["red", "blue"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
