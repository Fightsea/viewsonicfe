import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Student } from '../types';
import StudentCard from './StudentCard';

interface GroupViewProps {
  students: Student[];
}

const GroupView: FC<GroupViewProps> = ({ students }) => {
  const groups = useMemo(() => {
    let arr = [];
    for (let i = 0; i < students.length; i += 5) {
      arr.push(students.slice(i, i + 5));
    }
    return arr;
  }, [students]);

  return (
    <GroupContainer>
      {groups.map((group, index) => (
        <Group key={index}>
          <h3>Group {index + 1}</h3>
          {group.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Group>
      ))}
    </GroupContainer>
  );
};

export default GroupView;

const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Group = styled.div`
  background: beige;
  display: grid;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;
