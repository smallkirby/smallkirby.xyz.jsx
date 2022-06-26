import ProfileBox from '../components/profile/profileBox';
import PrintCharBy from '../components/common/printCharBy';
import { useState } from 'react';

export default function About({ preRender = false }: {preRender?: boolean}) {
  const command = '$ whoami | pretty';
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
        <ProfileBox />
      }
    </div>
  );
}
