import { IPageTitleProps } from "../../types"
import { StyledTitleContainer } from "./style"

export const PageTitle = ( {title, subtitle}: IPageTitleProps ) => {
  return (
    <StyledTitleContainer>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </StyledTitleContainer>
  )
}