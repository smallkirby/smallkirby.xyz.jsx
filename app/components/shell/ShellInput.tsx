import { useState } from 'react';

export default function ShellInput(props: {onEntered: (input: string) => void}) {
  const [isEnabled, setIsEnabled] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnabled) return;

    if (e.key === 'Enter') {
      const input = e.currentTarget.value;
      e.preventDefault();
      setIsEnabled(false);
      props.onEntered(input);
    }
  };

  return (
    <div className="w-full flex">
      <div>
        <span className="mr-1">$</span>
      </div>
      <div className="w-full ml-2">
        <input
          className="w-full border-none bg-skblack-dark focus:border-none focus:outline-none"
          onKeyDown={(e) => handleKeyDown(e)}
          disabled={!isEnabled}
        />
      </div>
    </div>
  );
}
