import styled from 'styled-components';
import { useAppDispatch } from '../store';
import { increaseScore, decreaseScore } from '../store/studentSlice';
import { Student } from '../types';

const disabledColor = 'silver';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const dispatch = useAppDispatch();

  const themeColor = student.isOnline ? 'dodgerblue' : disabledColor;
  const textColor = student.isOnline ? 'inherit' : disabledColor;

  return (
    <Card style={{ outline: `1px solid ${themeColor}` }}>
      <StudentId style={{ background: themeColor }}>{student.id}</StudentId>
      <StudentName style={{ outline: `1px solid ${themeColor}`, color: textColor }}>{student.name}</StudentName>
      <ScoreControls>
        <DecreaseButton onClick={() => dispatch(decreaseScore(student.id))} disabled={!student.isOnline || student.score === 0}>
          -1
        </DecreaseButton>
        <Score style={{ color: textColor }}>{student.score}</Score>
        <IncreaseButton onClick={() => dispatch(increaseScore(student.id))} disabled={!student.isOnline}>
          +1
        </IncreaseButton>
      </ScoreControls>
    </Card>
  );
};

export default StudentCard;

const Card = styled.div`
  width: 80px;
  border-radius: 5px;
  text-align: center;
`;

const StudentId = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const StudentName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
`;

const ScoreControls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3px;
  gap: 3px;
`;

const Score = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ScoreButton = styled.button`
  color: white;
  font-size: 12px;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const IncreaseButton = styled(ScoreButton)`
  background: ${props => (props.disabled ? disabledColor : 'limegreen')};
`;

const DecreaseButton = styled(ScoreButton)`
  background: ${props => (props.disabled ? disabledColor : 'tomato')};
`;
