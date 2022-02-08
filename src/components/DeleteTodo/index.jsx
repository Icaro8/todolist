import PropTypes from 'prop-types';

import React from 'react';

import { Container, DeleteButton } from './styles';

export function DeleteTodoComponent({ onClick }) {
  return (
    <Container>
      <DeleteButton onClick={onClick} />
    </Container>
  );
}

DeleteTodoComponent.propTypes = {
  onClick: PropTypes.func.isRequierd,
};
