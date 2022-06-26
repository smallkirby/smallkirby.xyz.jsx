import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function TmuxOpener(props: {stateChanged: (state: boolean) => void}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <button
      className={'rounded-full text-[#32302f] bg-[#ebdbb2] h-8 w-8 text-center opacity-30 hover:opacity-100'}
      onClick={() => {
        setIsOpen((val) => {
          props.stateChanged(!val);
          return !val;
        });
      }}
    >
      <FontAwesomeIcon icon={isOpen ? faCaretLeft : faCaretRight} className="h-6 w-6 mt-1 mx-auto" />
    </button>
  );
}
