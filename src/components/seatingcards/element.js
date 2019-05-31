import styled from 'styled-components';
import Card from 'antd/lib/card';


export const selectedStyle = {
  backgroundColor: 'red'
}


export const StyledCard = styled(Card)`
  {
    margin-bottom: 15px;
    width: 100%;
    min-width: 110px;
  }
  :focus {
    color: palevioletred;
    border-color: palevioletred;
  }
  :hover {
    color: palevioletred;
    border-color: palevioletred;
  }
  :active {
  }
`;