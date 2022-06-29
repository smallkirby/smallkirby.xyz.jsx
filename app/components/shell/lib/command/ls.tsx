import { useEffect, useState } from 'react';
import type { RouteEntry } from 'typings/route';
import { routeEntries } from 'data/routs';
import { Link } from 'react-router-dom';

function LsFile(props: {ent: RouteEntry}) {
  return (
    <div>
      <button className='w-full text-left'>
        <Link to={props.ent.url} className="text-skwhite">
          <span className='text-skblue-dark'>{props.ent.name}</span>: drwxrwxr-x 3 skb smallkirby 4096 Apr 9 18:26
        </Link>
      </button>
    </div>
  );
}

function LsFiles() {
  return (
    <div>
      {routeEntries.map((ent, ix) => (
        <LsFile key={ix} ent={ent} />
      ))}
    </div>
  );
}

function LsParagraph(props: {path: string}) {
  return (
    <div>
      {props.path.trim().replace(/\/$/, '') === '.' ?
        <LsFiles /> :
        <p>ls: cannot access '{props.path.trim()}': Permission denied</p>
      }
    </div>
  );
}

export default function Ls(props: {args: string[]}) {
  const [pathes, setPathes] = useState(props.args);

  useEffect(() => {
    if (pathes.length === 0) {
      setPathes(['.']);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {pathes.length === 1 ?
        pathes.map((path, ix) => ((
          <LsParagraph key={ix} path={path} />
        ))) :
        pathes.map((path, ix) => ((
          <div key={ix}>
            <p>{path} :</p>
            <LsParagraph key={ix} path={path} />
          </div>
        )))
      }
    </div>
  );
}
