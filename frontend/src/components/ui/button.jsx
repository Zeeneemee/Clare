const Button = (bgColor, text, onClick, hoverBgColor, disabled) => {
  return (
    <button
      onClick={onClick}
      className={`font-lato text-lg font-light bg-${bgColor} text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-${hoverBgColor} hover:text-darkblue`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
