import { useState } from 'react';
import ShellParagraph from './ShellParagraph';

export default function Shell() {
  const [shellNum, setShellNum] = useState(1);

  return (
    <div className="h-full w-full">
      {Array(shellNum).fill(0).map((_, ix) => (
        <ShellParagraph key={ix} callback={() => setShellNum((val) => val + 1)} />
      ))}
    </div>
  );
}
