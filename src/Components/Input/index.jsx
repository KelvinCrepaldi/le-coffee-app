import { InputContainer } from "../../Styles/ComponentsStyle/Input";

export const Input = ({ error, icon: Icon, register, name, ...rest }) => {
  return (
    <InputContainer>
      <div className="inputBox">
        {Icon && <p className="inputIcon">{Icon}</p>}
        <input {...register(name)} {...rest} />
      </div>
      {error && <p className="inputError">{error}</p>}
    </InputContainer>
  );
};
