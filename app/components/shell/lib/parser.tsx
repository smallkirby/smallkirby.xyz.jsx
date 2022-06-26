import Ls from './ls';

function ErrorMsg(props: {command: string}) {
  return (
    <div>
      Command '{props.command}' not found.
    </div>
  );
}

export const shellParse = (command: string): JSX.Element => {
  switch (command.trim().split(' ')[0]) {
  case 'ls':
    return <Ls args={command.split(' ')}/>;
  default:
    return <ErrorMsg command={command} />;
  }
};
