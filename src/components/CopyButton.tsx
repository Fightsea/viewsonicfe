import { FC } from 'react';
import styled from 'styled-components';
import { MdContentCopy } from 'react-icons/md';

interface CopyButtonProps {
  text: string;
}

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copied: ${text}`);
    } catch (err) {
      console.error('Copy Failed:', err);
    }
  };

  return (
    <Button onClick={handleCopy}>
      <MdContentCopy size={16} />
    </Button>
  );
};

export default CopyButton;

const Button = styled.button`
  background: dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
