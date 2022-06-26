import { useEffect, useState } from 'react';

export default function PrintCharBy(props: {str: string, intervalMs: number, callback: () => void}) {
  const originalStr = props.str;
  const [curstr, setCurstr] = useState('');

  useEffect(() => {
    const handler = setInterval(() => {
      setCurstr((curstr) => {
        if (curstr.length === originalStr.length - 1) {
          clearInterval(handler);
          props.callback();
        }
        return originalStr.substring(0, curstr.length + 1);
      });
    }, props.intervalMs);

    return () => clearInterval(handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {curstr}
    </div>
  );
};
