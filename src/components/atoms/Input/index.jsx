export const Input = (props) => {
  const { inputType, inputVariant, inputPlaceholder, inputName, inputValue, onChange } = props;
  return (
    <input type={inputType} value={inputValue} className={`${inputVariant}`} placeholder={inputPlaceholder} name={inputName} onChange={onChange} />
  );
};
