import styled from 'styled-components';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
export const Container = styled.div``;

export const CompletTodo = styled(ImCheckboxChecked)`
  cursor: pointer;
  color: #38a169;
`;

export const UnCompletTodo = styled(ImCheckboxUnchecked)`
  cursor: pointer;
`;

/*
  ImCheckboxUnchecked
  ImCheckboxChecked
*/
