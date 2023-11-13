import { useState } from 'react';
import PrintCharBy from 'components/common/printCharBy';

export default function Resume({ preRender = false }: {preRender?: boolean}) {
  const command = '$ history | tail -n 10';
  const [shown, setShown] = useState(preRender);

  return (
    <div>
      {!preRender ?
        <PrintCharBy str={command} intervalMs={100} callback={() => {
          setShown(true);
        }} /> :
        command
      }

      {shown &&
        <div className='ml-4 mt-4'>undefined</div>
      }
    </div>
  );
};
