import { useState } from 'react';
import moment from 'moment';

export default function Header( props: { title: string } ) {
  const [curTime, setCurTime] = useState( moment().format( 'YYYY-MM-DD HH:mm:ss' ) );

  setInterval( () => {
    setCurTime( moment().format( 'YYYY-MM-DD HH:mm:ss' ) );
  }, 500);

  return (
    <header
      className="text-xl md:text-base bg-[#2e3436] w-screen z-50 flex py-1 px-3 justify-center md:justify-between fixed"
    >
      <div id="session-id" className="float-left text-[#4E9A06] md:block hidden">
        <p>
          Session: 38 <span className='text-[#C4A000] pr-2'>1</span>
          <span className="text-[#84A87F]">1</span>
        </p>
      </div>

      <div id="com">
        <p>1:{ props.title }<span className="text-[#C4A000] ml-1">*</span></p>
      </div>

      <div id="timer" className="text-[#84A87F] md:block hidden">
        [ { curTime } ]
      </div>
    </header>
  );
};
