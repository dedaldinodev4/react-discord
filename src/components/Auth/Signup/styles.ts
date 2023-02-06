import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Input } from '../Form/styles';

export const Container = styled.div``;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--link);
  &:hover {
    color: var(--primary);
  }
`; 

export const FormInput = styled(Input)`
  width: 32%;
  margin-left: 4px;
`;
