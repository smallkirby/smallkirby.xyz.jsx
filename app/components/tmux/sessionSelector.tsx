import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Index from '../../routes/index';
import About from '../../routes/about';
import Likes from '../../routes/likes';
import Dislikes from '../../routes/dislikes';
import Pronunciation from '../../routes/pronunciation';

type SessionEntry = {
  name: string;
  url: string;
  component: () => JSX.Element;
};

const sessionEntries: SessionEntry[] = [
  {
    name: 'index',
    url: '/',
    component: () => <Index />,
  },
  {
    name: 'about',
    url: '/about',
    component: () => <About preRender={true}/>,
  },
  {
    name: 'likes',
    url: '/likes',
    component: () => <Likes preRender={true}/>,
  },
  {
    name: 'dislikes',
    url: '/dislikes',
    component: () => <Dislikes preRender={true}/>,
  },
  {
    name: 'pronunciation',
    url: '/pronunciation',
    component: () => <Pronunciation preRender={true}/>,
  },
];

function SessionSelectorEntry(props: {ent: SessionEntry, index: number, selected: Boolean, isCurrentPage: Boolean}) {
  return (
    <div>
      <button
        className={`w-full text-left pl-2
        ${props.selected ? 'bg-[#ebdbb2] text-[#32302f]' : 'text-[#ebdbb2] bg-[#32302f]'}`}>
        {props.ent.name}: {props.isCurrentPage ?
          <span>1 windows (attached)</span> :
          <span>0 windows</span>
        }
      </button>
    </div>
  );
};

function SessionPreview(props: {ent: SessionEntry}) {
  return (
    <fieldset className='h-3/6 p-4 pb-8 mb-8 mx-2 border-2 border-[#ebdbb2] overflow-hidden'>
      <legend className='px-4'>{props.ent.name}</legend>

      {props.ent.component()}
    </fieldset>
  );
}

export default function SessionSelector(props: {quitCallback: () => void}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(
    sessionEntries.findIndex((ent) => ent.url === location.pathname),
  );

  const handleArrowKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
    case 'ArrowUp':
      e.preventDefault();
      setSelectedIndex((selectedIndex) => (selectedIndex + sessionEntries.length - 1) % sessionEntries.length);
      break;
    case 'ArrowDown':
      e.preventDefault();
      setSelectedIndex((selectedIndex) => (selectedIndex + 1) % sessionEntries.length);
      break;
    case 'Escape':
      e.preventDefault();
      setSelectedIndex((selectedIndex) => {
        props.quitCallback();
        return (selectedIndex + 1) % sessionEntries.length;
      });
      break;
    case 'Enter':
      e.preventDefault();
      setSelectedIndex((selectedIndex) => {
        props.quitCallback();
        navigate(sessionEntries[selectedIndex].url, { replace: true });
        return (selectedIndex + 1) % sessionEntries.length;
      });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleArrowKeyPress, false);
    return () => document.removeEventListener('keydown', handleArrowKeyPress, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed z-50 mt-8 w-full h-full bg-[#32302f] px-4 pt-2 pb-8">
      <h1 className="text-[#84A87F] text-lg">Session Control</h1>

      <div className="flex-col ml-4 mt-2 h-2/5">
        {sessionEntries.map((ent, ix) => (
          <SessionSelectorEntry
            key={ix} ent={ent} index={ix}
            selected={ix === selectedIndex} isCurrentPage={location.pathname === ent.url}
          />
        ))}
      </div>

      <SessionPreview ent={sessionEntries[selectedIndex]} />
    </div>
  );
};
