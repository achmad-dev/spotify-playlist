import styled, { css } from 'styled-components';
import { ReactComponent as CrossIcon } from '../../assets/icons/cancel.svg';
import { PlaylistPlay } from '../Playlist/PlaylistComponentStyles';
import { UpgradeButton, UpgradeText } from '../Navbar/navbarStyles';

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  margin: 0 auto;
  outline: none;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover {
    background-color: Green;
  }`;
export const ModalDialog = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.9);
`;
export const Form = styled.form`
  display: flex;
  background-color: #28282
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  border-radius: 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  color: green;
  `;
export const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalCrossContainer = styled.div`
  padding: 0.75rem;
  cursor: pointer;
`;

export const ModalCross = styled(CrossIcon)``;

const title = css`
  color: #fff;
  font-size: 3rem;
  line-height: 56px;
  letter-spacing: -0.005rem;
  font-weight: 900;
`;

export const ModalTitle = styled.h1`
  ${title}
  margin: 1rem 0;
`;

export const ModalLabel = styled.div`
  width: 100%;
  background-color: #282828;
  padding: 2rem 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;
export const Div = styled.div`
  background-color: #282828;
  `;
export const InputTitle = styled.span`
  background-color: #282828;
  color: green;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  ${title}
  caret-color: #1db954;
  width: 100%;
  background-color: #282828;
  border: px solid #1db954;
  outline: 0;

  ::placeholder {
    color: #535353;
  }
`;

export const ModalButtonsContainer = styled.button`
  display: flex;
  padding: 1.75rem 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  margin: 0 auto;
  outline: none;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover {
    background-color: Green;
  }
`;

export const ModalButtonOutline = styled(UpgradeButton)``;
export const ModalButtonOutlineText = styled(UpgradeText)`font-size: 1.2rem;
font-weight: bold;`;

export const ModalButton = styled(PlaylistPlay)``;
