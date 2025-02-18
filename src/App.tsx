import { useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import ClassInfoModal from './components/ClassInfoModal';
import ClassStudentsModal from './components/ClassStudentsModal';
import { size } from './styles/rwd';

const App = () => {
  const [showClassInfo, setShowClassInfo] = useState(true);
  const [showClassStudents, setShowClassStudents] = useState(true);

  return (
    <Provider store={store}>
      <AppContainer>
        <ModalContainer>
          {showClassInfo && <ClassInfoModal onClose={() => setShowClassInfo(false)} />}
          {showClassStudents && <ClassStudentsModal onClose={() => setShowClassStudents(false)} />}
        </ModalContainer>
      </AppContainer>
    </Provider>
  );
};

export default App;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ModalContainer = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: ${size.md}) {
    display: flex;
  }
`;
