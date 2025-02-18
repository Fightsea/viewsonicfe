import { FC, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchStudents } from '../store/studentSlice';
import { MdPerson, MdClose } from 'react-icons/md';
import GroupView from './GroupView';
import StudentCard from './StudentCard';
import Menu from './Menu';
import { size } from '../styles/rwd';

interface ClassStudentsModalProps {
  onClose: () => void;
}

const ClassStudentsModal: FC<ClassStudentsModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const currentClass = useSelector((state: RootState) => state.classes.currentClass);
  const students = useSelector((state: RootState) => state.students.students);

  const onlineStudentCount = useMemo(() => students.filter(student => student.isOnline).length, [students]);

  const [activeTab, setActiveTab] = useState<'studentList' | 'group'>('studentList');

  useEffect(() => {
    if (currentClass.id) {
      dispatch(fetchStudents(currentClass.id));
    }
  }, [currentClass.id]);

  return (
    <Modal>
      <CloseButton onClick={onClose}>
        <MdClose size={24} />
      </CloseButton>
      <Header>
        <h2>{currentClass.name}</h2>
        <OnlineStatus>
          <MdPerson size={24} />
          <h4>{`${onlineStudentCount}/${students.length}`}</h4>
        </OnlineStatus>
      </Header>
      <Panel>
        <Tabs>
          <Tab active={activeTab === 'studentList'} onClick={() => setActiveTab('studentList')}>
            Student List
          </Tab>
          <Tab active={activeTab === 'group'} onClick={() => setActiveTab('group')}>
            Group
          </Tab>
        </Tabs>
        <Menu />
      </Panel>
      <Content>
        {activeTab === 'studentList' && students.map(student => <StudentCard key={student.id} student={student} />)}
        {activeTab === 'group' && <GroupView students={students} />}
      </Content>
    </Modal>
  );
};

export default ClassStudentsModal;

const Modal = styled.div`
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  min-width: 280px;
  max-width: 300px;
  max-height: 450px;
  width: 100%;
  position: relative;

  @media (min-width: ${size.sm}) {
    min-width: 300px;
    max-width: 550px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  gap: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  margin-right: 10px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const OnlineStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tabs = styled.div`
  display: flex;
  margin-left: 15px;
  gap: 5px;

  @media (min-width: ${size.md}) {
    margin-left: 25px;
  }
`;

const Tab = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})<{ active: boolean }>`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
  background: ${({ active }) => (active ? 'white' : 'lightgray')};
  color: ${({ active }) => (active ? 'dodgerblue' : 'dimgray')};

  &:hover {
    background: azure;
  }
`;

const Content = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
  gap: 15px;
  box-shadow: 0px -4px 4px 0px lightgray;
  max-height: 300px;
  overflow: auto;
`;
