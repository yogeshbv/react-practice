// import styled from 'styled-components';
import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px 20px;
  box-shadow: none;
  
  ${props => props.primary && css`
    background: #6c757d;
    color: white;
  `}

  ${props => props.secondary && css`
    background: #6c757d;
    color: white;
  `}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;