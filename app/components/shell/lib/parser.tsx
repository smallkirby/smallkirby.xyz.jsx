function ErrorMsg(props: {command: string}) {
  return (
    <div>
      Command '{props.command}' not found.
    </div>
  );
}

export const shellParse = (command: string): JSX.Element => {
  switch (command.trim()) {
  default:
    return <ErrorMsg command={command} />;
  }
};
