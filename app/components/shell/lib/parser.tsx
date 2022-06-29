import Ls from './command/ls';
import Cd from './command/cd';

function ErrorMsg(props: {command: string}) {
  return (
    <div>
      Command '{props.command}' not found.
    </div>
  );
}

const trimArgs = (args: string) =>
  args.trim().split(' ').map((s) => (s.trim())).filter((s) => s.length > 0).slice(1);

export const shellParse = (command: string): JSX.Element => {
  switch (command.trim().split(' ')[0]) {
  case 'ls':
    return <Ls args={trimArgs(command)}/>;
  case 'cd':
    return <Cd args={trimArgs(command)}/>;
  default:
    return <ErrorMsg command={command} />;
  }
};
