import { useState } from 'react';
import styled from 'styled-components';
import { MdMoreVert } from 'react-icons/md';
import { size } from '../styles/rwd';

const menus = ['Add a New Student', 'Edit a Student', 'Remove a Student'];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuButton onClick={() => setShowMenu(!showMenu)} onBlur={() => setShowMenu(false)} tabIndex={0}>
      <MdMoreVert size={24} />
      <MenuPopup visible={showMenu}>
        {menus.map(value => (
          <MenuItem key={value}>{value}</MenuItem>
        ))}
      </MenuPopup>
    </MenuButton>
  );
};

export default Menu;

const MenuButton = styled.div`
  margin-right: 5px;
  cursor: pointer;

  @media (min-width: ${size.md}) {
    margin-right: 25px;
  }
`;

const MenuPopup = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'visible',
})<{ visible: boolean }>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  background-color: whitesmoke;
  border: 1px solid DarkGray;
  box-shadow: 2px 2px 5px lightgray;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  white-space: nowrap;
  z-index: 100;

  @media (min-width: ${size.md}) {
    right: 40px;
  }
`;

const MenuItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: azure;
  }
`;
