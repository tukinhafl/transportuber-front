import styled from "styled-components";
import { css } from "styled-components";

export const InputContainer = styled.div<{isErrored: boolean}>`
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    height: 60px;
    padding: 15px;
    margin: 5px 0;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
}

    i{
        ${(props) => props.isErrored &&
            css`
                color: var(--red);
            `}
        font-size: 28px;
        color: var(--white)
    };
    input{
        ${(props) => props.isErrored &&
            css`
                color: var(--red);
            `}
        border: none;
        height: 20px;
        flex: 1;
        margin-left: 10px;
        background: rgb(67 69 73);
        color: rgba(255, 255, 255, 0.8);
        font-weight: bold;

        ::placeholder{
            ${(props) => props.isErrored &&
                css`
                    color: var(--red);
                `}
            font-size: 14px;
            color: var(--white);
            font-weight: bold
        }
    }
`