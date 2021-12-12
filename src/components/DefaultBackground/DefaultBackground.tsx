import React, { FunctionComponent } from "react";
import { StyledBackgroundPage } from "./style";

const DefaultBackground: FunctionComponent = ({children}) => {
    return(
        <StyledBackgroundPage>
            {children}
        </StyledBackgroundPage>
    )
}

export default DefaultBackground