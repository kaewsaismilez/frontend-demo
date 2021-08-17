import styled from 'styled-components';

export const AuthWrapper = styled.main`
  display: flex;
  min-height: 100vh;
`;

export const VioletField = styled.div`
  flex: 3;
  background-color: #290358;
`;


export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
`

export const TopSentence = styled.p`
  display: block;
  padding: 16px 32px;
  text-align: center;
  font-style: italic;
`;

export const ForgotPassword = styled.p`
  font-size: 12px;
  font-style: italic;
`;

export const Separator = styled.hr`
  height: 3px;
  background-color: #F67181;
`;

export const FormContainer = styled.div`
  margin: 64px 24px;
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #F67181;
  padding: 4px;
  min-width: 300px;
  font-size: 20px;
  &:focus {
    outline:none;
  }
`;


export const AuthForm = styled.form`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  Input {
    margin: 8px 0;
  }
  Input:first-of-type {
    font-weight: bold;
  }
  Input:nth-last-of-type {
  
    margin-top: 32px;
  }
`;

export const TopContainer = styled.div`
  flex: 1;
`;

export const BottomContainer = styled.div`
  flex: 1;
`;

export const FooterParagraph = styled.p`
  text-align: center;
  font-weight:500;
  font-size: 18px;
  a {
    color: #F67181;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const FormButton = styled.button`
  font-size: 1.2em;
  background-color: #F67181;
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  color: white;
  min-width: 250px;
  font-size: 32px;
  margin-top: 32px;
`;

export const ErrorParagraph = styled.p`
  font-weight: bold;
  font-style: italic;
  min-width:250px;
  display: flex;
  justify-content: space-around;
  i {
    color: red;
  }
`;