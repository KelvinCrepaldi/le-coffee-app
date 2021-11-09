export const Input = ({ label, error, icon, resgister, name, ...rest }) => {
    return(
        <div>
            <label></label>
            <p>{icon}</p>
            <input {...rest}/>
        </div>
    )
}