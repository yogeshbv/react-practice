import styled, {css, keyframes} from 'styled-components';

export const Container = styled("div")<{innerSpacing: string, textColor: string}>`
  width: 1200px;
  margin: 0 auto;
  ${props => props.innerSpacing &&
    css`
      padding: ${props.innerSpacing}px;
    `
  }
  ${props => props.textColor &&
    css`
      color: ${props.textColor};
    `
  }
`;


export const BgDark = styled("div")`
  background: #343a40;
`;

const headerTexts= {
  color: "#999999",
  fontFamily: "Roboto",
}

export const H3 = styled("h3")<{borderBottom: boolean}>`
  font-size: 28px;
  ${css`
      ${headerTexts}
  `}
  
  ${props => props.borderBottom && 
      css`
          border-bottom: 1px solid #cccccc;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
      `
  }
`;

export const DefaultButton = styled.button`
  padding: 10px 20px;
  box-shadow: none;
  border-radius: 4px;
  border: none;
  margin-right: 1rem;
`;

// Extend example
export const PrimaryButton = styled(DefaultButton)`
  background: #007bff;
  color: #FFFFFF
`;

// Extend example
export const SecondaryButton = styled(DefaultButton)`
  background: #6c757d;
  color: #FFFFFF
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
