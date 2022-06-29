import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeEntries } from 'data/routs';

type PathError = 'permission' | 'not_found';
type PathResult =
  | { valid: true, path: string }
  | { valid: false, err: PathError };

const reductPath = (path: string): PathResult => {
  const parts = path.split('/');
  const newParts = [];

  if (path.startsWith('/') || path.startsWith('~')) {
    return { valid: false, err: 'permission' };
  }

  for (const part of parts) {
    if (part === '..') {
      if (newParts.length > 0) {
        newParts.pop();
      } else {
        return { valid: false, err: 'permission' };
      }
    } else if (part !== '.') {
      newParts.push(part);
    }
  }

  return { valid: true, path: newParts.join('/') };
};

const getLocation = (path: string): PathResult => {
  const reductedPath = reductPath(path);

  if (!reductedPath.valid) {
    return reductedPath;
  } else if (reductedPath.path === 'index') {
    return { valid: true, path: '/' };
  } else {
    const route = routeEntries.find((ent) => ent.url.substring(1) === reductedPath.path);
    if (route) {
      return { valid: true, path: route.url };
    } else {
      return { valid: false, err: 'not_found' };
    }
  }
};

const checkHasError = (args: string[]): boolean => {
  if (args.length >= 2) {
    return true;
  }

  const argsWithoutFlags = args.filter((arg) => (!arg.startsWith('-')));
  if (argsWithoutFlags.length === 0) {
    argsWithoutFlags.push('.');
  }
  return !getLocation(argsWithoutFlags[0]).valid;
};

function CdError({ args }: {args: string[]}) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const flags = args.filter((arg) => (arg.startsWith('-')));
    if (flags.length !== 0) {
      setErrMsg(`invalid option: ${flags.join(', ')}`);
      return;
    }
    const argsWithoutFlags = args.filter((arg) => (!arg.startsWith('-')));
    if (argsWithoutFlags.length > 1) {
      setErrMsg('too many arguments');
      return;
    }

    const locationResult = getLocation(argsWithoutFlags.length === 0 ? '.' : argsWithoutFlags[0]);
    if (!locationResult.valid) {
      switch (locationResult.err) {
      case 'permission':
        setErrMsg(argsWithoutFlags[0].trim() + ': Permission denied');
        break;
      case 'not_found':
        setErrMsg(argsWithoutFlags[0].trim() + ': No such file or directory');
        break;
      }
    } else {
      setErrMsg('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      cd: {errMsg}
    </div>
  );
}

function CdValid({ args }: {args: string[]}) {
  const nav = useNavigate();

  useEffect(() => {
    const pathes = args.filter((arg) => (!arg.startsWith('-')));
    const location = getLocation(pathes.length === 0 ? '.' : pathes[0]);
    if (location.valid) {
      nav(location.path);
    } else {
      console.error('cd: Somehow, failed to parse location.');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div></div>
  );
}

export default function Cd({ args }: {args: string[]}) {
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    setHasError(checkHasError(args));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {hasError ?
        <CdError args={args} /> :
        <CdValid args={args} />
      }
    </div>
  );
}
