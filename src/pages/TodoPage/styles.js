import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7fafc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  .btn {
    position: absolute;
    top: 25px;
    right: 150px;
    padding: 10px;
    border: none;
    background-color: #3182ce;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const ContainerContent = styled.div`
  width: 80%;
  height: 90%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 0.5px solid #a0aec0;
  box-shadow: 0 0 5px #a0aec0;
  border-bottom-color: transparent;
  padding: 20px;
  h1 {
    margin-top: -60px;
    font-family: 'Quintessential', cursive;
  }
`;
export const Form = styled.form`
  padding: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline-color: #3182ce;
  box-shadow: 0 0 3px #2c5282;
  padding: 5px 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  background-color: #3182ce;
  border-radius: 5px;
  color: #fff;
  font-weight: 18px;
  &:hover {
    box-shadow: 0 0 0 1px #3182ce;
    background-color: transparent;
    color: #3182ce;
    transition: 0.4s;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #a0aec0;
  padding: 10px;

  margin-bottom: 5px;
  border-radius: 5px;
  animation: chegada 0.6s;
  @keyframes chegada {
    0% {
      transform: translateY(150px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
