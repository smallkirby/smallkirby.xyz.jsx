import { useState } from 'react';
import moment from 'moment';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SessionSelector from '../tmux/sessionSelector';

export default function Header( props: { title: string } ) {
  const [curTime, setCurTime] = useState( moment().format( 'YYYY-MM-DD HH:mm:ss' ) );
  const [isControlShown, setIsControlShown] = useState( false );

  setInterval( () => {
    setCurTime( moment().format( 'YYYY-MM-DD HH:mm:ss' ) );
  }, 500);

  return (
    <div>
      <header
        className=
          "text-xl md:text-base bg-[#2e3436] w-screen z-50 flex py-1 px-3 justify-center md:justify-between fixed"
      >
        <div id="session-id" className="float-left text-[#4E9A06] md:block hidden">
          <p>
            Session: 38 <span className='text-[#C4A000] pr-2'>1</span>
            <span className="text-[#84A87F]">1</span>
          </p>
        </div>

        <div id="com">
          <button className="flex outline-none focus:ring-0"
            onClick={() => setIsControlShown((val) => !val)} tabIndex={-1}>
            <p>1:{ props.title }<span className="text-[#C4A000] ml-1">*</span></p>
            <FontAwesomeIcon icon={faCaretDown} className="ml-2 mt-1 text-[#4E9A06]" />
          </button>
        </div>

        <div id="timer" className="text-[#84A87F] md:block hidden">
          [ { curTime } ]
        </div>
      </header>

      {isControlShown &&
        <SessionSelector quitCallback={() => {
          setIsControlShown(false);
        }} />
      }
    </div>
  );
};
