import { useEffect, useState } from 'react';

export default function ShellInput(
  { onEntered, preRenderCom = null }: {onEntered: (input: string) => void, preRenderCom?: string | null},
) {
  const [isEnabled, setIsEnabled] = useState(true);

  const execEnter = (input: string) => {
    setIsEnabled(false);
    onEntered(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnabled) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      execEnter(e.currentTarget.value);
    }
  };

  useEffect(() => {
    console.log(preRenderCom);
    if (preRenderCom) {
      execEnter(preRenderCom);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          placeholder={preRenderCom ? preRenderCom : ''}
        />
      </div>
    </div>
  );
}
