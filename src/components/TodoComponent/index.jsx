import PropsTypes from 'prop-types';

import React from 'react';

import { Container, ContainerContent } from './styles';

export function TodoComponent({ newTodo, isComplet }) {
  return (
    <Container>
      <ContainerContent>
        <p className={isComplet ? 'active' : ''}>{newTodo}</p>
      </ContainerContent>
    </Container>
  );
}

TodoComponent.propTypes = {
  isComplet: PropsTypes.bool.isRequired,
  newTodo: PropsTypes.string.isRequired,
};
