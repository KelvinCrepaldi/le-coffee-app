import { InputContainer } from "../../Styles/ComponentsStyle/Input";

export const Input = ({
  labelText,
  error,
  icon: Icon,
  register,
  name,
  ...rest
}) => {
  return (
    <InputContainer>
      {labelText && <label>{labelText}</label>}
      <div className="inputBox">
        {Icon && <p>{Icon}</p>}
        <input {...register(name)} {...rest} />
        {error && <p>{error}</p>}
      </div>
    </InputContainer>
  );
};
