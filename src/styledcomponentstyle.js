import styled from 'styled-components';

export  const Prem = styled.div`
width : 30px ;
color : ${(props)=>props.clr =='red' ? 'red': 'green'};
//height:100px;
border: 3px solid green;
margin:30px
`
// The Button from the last section without the interpolations
export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles, border upar ka hi rahega bus color ovveride..
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const TableWraper=styled.div`
table {
  width:200px;
  height:200px;
  border:2px solid orange;
  margin:20px;
  & th {
    padding-right:40px;
    
  }
  & th:nth-child(2n+1) {
    color:green
    
  }
  & tr:nth-child(2n) {
    color:red
    
  }
  & td{
    padding-right:40px
  }
}
`
export const Input=styled.input`
border: 2px solid ${(props)=>props.error =='error' ? 'red': 'black'};
`