import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type SessionEntry = {
  name: string;
  url: string;
};

const sessionEntries: SessionEntry[] = [
  {
    name: 'index',
    url: '/',
  },
  {
    name: 'about',
    url: '/about',
  },
  {
    name: 'likes',
    url: '/likes',
  },
  {
    name: 'dislikes',
    url: '/dislikes',
  },
  {
    name: 'pronunciation',
    url: '/pronunciation',
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

export default function SessionSelector(props: {quitCallback: () => void}) {
  // @ts-ignore
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(
    sessionEntries.findIndex((ent) => ent.url === location.pathname),
  );

  const handleArrowKeyPress = (e: KeyboardEvent) => {
    e.preventDefault();

    switch (e.key) {
    case 'ArrowUp':
      setSelectedIndex((selectedIndex) => (selectedIndex + sessionEntries.length - 1) % sessionEntries.length);
      break;
    case 'ArrowDown':
      setSelectedIndex((selectedIndex) => (selectedIndex + 1) % sessionEntries.length);
      break;
    case 'Enter':
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
    <div className="fixed z-50 mt-8 w-full h-full bg-[#32302f] px-4 py-2">
      <h1 className="text-[#34E2E2] text-lg">Session Control</h1>

      <div className="flex-col ml-4 mt-2">
        {sessionEntries.map((ent, ix) => (
          <SessionSelectorEntry
            key={ix} ent={ent} index={ix}
            selected={ix === selectedIndex} isCurrentPage={location.pathname === ent.url}
          />
        ))}
      </div>
    </div>
  );
};
