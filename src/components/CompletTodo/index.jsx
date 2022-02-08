import PropTypes from 'prop-types';
import React from 'react';

import { Container, CompletTodo, UnCompletTodo } from './styles';

export function CompletTodoComponent({ isComplet, onClick }) {
  return <Container>{isComplet ? <CompletTodo onClick={onClick} /> : <UnCompletTodo onClick={onClick} />}</Container>;
}
CompletTodoComponent.propTypes = {
  isComplet: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
