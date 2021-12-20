import { IStyledFilterButtonProps } from "../../types"
import { StyledButton } from "./style"

export const FilterButton = ({icon, height, width, font, text, mark}: IStyledFilterButtonProps) => {
  return (
    <StyledButton 
      height={height}
      width={width}
      font={font}
    >
      <i className={icon}></i>
      {text}
      <i className={mark}></i>
    </StyledButton>
  )
}