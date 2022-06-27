import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import ShellInput from './ShellInput';
import { shellParse } from './lib/parser';

export function ShellResult(props: {command: string}) {
  return shellParse(props.command);
}

export default function ShellParagraph(props: {callback: () => void}) {
  const user = 'smallkirby';
  const host = 'xyz';
  const location = useLocation();
  const [pwd] = useState(location.pathname);
  const [timeStr] = useState(moment().format( 'HH:mm:ss' ));
  const [isActive, setIsActive] = useState(true);
  const [command, setCommand] = useState('');

  const handleInput = (input: string) => {
    setCommand(input);
    setIsActive(false);
    props.callback();
  };

  return (
    <div className="mb-2">
      <div>
        <span className='text-skgreen mr-1'>{user}</span>
        <span className='text-skblue-dark'>@</span>
        <span className='text-skgreen mx-1'>{host}</span>:
        <span className='text-skblue-dark mx-1'>~{pwd}</span>:
        <span className='text-[#BE1BD9] mx-1'>{timeStr}</span>
      </div>

      <ShellInput onEntered={handleInput}/>

      {!isActive && <ShellResult command={command}/>}
    </div>
  );
}
