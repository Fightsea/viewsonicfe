import { FC, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchClasses } from '../store/classSlice';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import { MdClose, MdNavigateBefore } from 'react-icons/md';

interface ClassInfoModalProps {
  onClose: () => void;
}

const ClassInfoModal: FC<ClassInfoModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const currentClass = useSelector((state: RootState) => state.classes.currentClass);

  const qrCodeSrc = useMemo(
    () => (currentClass.link ? `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${currentClass.link}` : ''),
    [currentClass.link],
  );

  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  return (
    <Modal>
      <CloseButton onClick={onClose}>
        <MdClose size={24} />
      </CloseButton>
      <Header>
        <Back onClick={onClose}>
          <MdNavigateBefore size={16} />
          <H4>Back to Class List</H4>
        </Back>
        <H2>{`Join ${currentClass.name}`}</H2>
        <InfoRow>
          <Info>
            <H4>{`ID: ${currentClass.id}`}</H4>
            <CopyButton text={currentClass.id} />
          </Info>
          <Info>
            <H4>Link</H4>
            <CopyButton text={currentClass.link} />
          </Info>
        </InfoRow>
      </Header>
      {qrCodeSrc && <QRCode src={qrCodeSrc} />}
    </Modal>
  );
};

export default ClassInfoModal;

const Modal = styled.div`
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  max-height: 450px;
`;

const Header = styled.div`
  align-items: center;
`;

const Back = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const H2 = styled.h2`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
`;

const H4 = styled.h4`
  margin: 5px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 18px;
`;

const Info = styled.div`
  display: flex;
  gap: 5px;
`;

const QRCode = styled.img`
  width: 280px;
  height: 280px;
  background: white;
  padding: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  margin-right: 10px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
