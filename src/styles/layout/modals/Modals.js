import styled from "styled-components";

export const ModalOverlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.div`
background-color: #FFFFFF;
padding: 20px;
border-radius: 16px;
max-width: 500px;
width: 100%;
`
export const ModalInternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`
export const IconCheck = styled.p`
    font-size: 7rem;
    color: #7E6DA3;
`
export const TextCadSuc = styled.p`
    font-size: 1.5rem;
    color: #5B5863;
`
export const BtnClose = styled.button`
    width: 5rem;
    background-color: #7E6DA3;
    font-size: 2rem;
    color: #FFF;
    padding: .7rem;
    border: 1px solid #FFF;
    border-radius: 12px;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`