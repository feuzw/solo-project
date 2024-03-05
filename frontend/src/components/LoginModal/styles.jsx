import styled from "styled-components";

export const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const LoginBox = styled.div`
    position: relative;
    background-color: #fff;
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;
    color: #333;
    font-weight: normal;
`;

export const Input = styled.input`
    width: 250px;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const LoginButton = styled.button`
    width: 250px;
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: #CDF0ED;
    color: black;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: filter 0.3s ease;
  
    &:hover {
        filter: brightness(0.9) !important; /* !important 키워드 추가 */
    }
`;

export const TextContainer = styled.div`
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

export const Text = styled.span`
  color: #555;
  font-size: 0.9rem;
  margin: 0 5px;
`

export const LinkText = styled.span`
  color: #555;
  font-size: 0.9rem;
  margin: 0 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  `
  export const CloseButton = styled.img`
  margin : 0;
  width:20px;
  position: absolute;
  top: 25px;
  right: 20px;
  transition: filter 0.3s ease;
  cursor: pointer;

  &:hover {
      filter: brightness(0.8) !important; /* !important 키워드 추가 */
  }
`;
