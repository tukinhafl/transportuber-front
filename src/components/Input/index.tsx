import { IInputProps } from "../../types";
import { InputContainer } from "./style";


const Input = ({ icon, register, name, error, ...rest }: IInputProps) => {    
  return (
    <InputContainer isErrored={!!error}>
      {/* isErrored={!!error} na div de baixo, mudando a cor quando der erro */}
        <i className={icon}></i> 
        <input {...register(name)} {...rest} />
    </InputContainer>
  );
};

export default Input;
