import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
`;

export const ContainerContent = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: #1a202c;

  .active {
    text-decoration: line-through;
    color: #cbd5e0;
  }
`;
