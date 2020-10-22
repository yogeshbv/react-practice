// import styled from 'styled-components';
import styled from 'styled-components'

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