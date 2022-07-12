const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputWithLabel;
