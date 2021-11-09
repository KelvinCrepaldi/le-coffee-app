export const Input = ({
  labelText,
  error,
  icon: Icon,
  register,
  name,
  ...rest
}) => {
    
  return (
    <div>
      {labelText && <label>{labelText}</label>}
      <div>
        {Icon && <p>{Icon}</p>}
        <input {...register(name)} {...rest} />
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
