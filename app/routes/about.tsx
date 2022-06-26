import ProfileBox from '../components/profile/profileBox';
import PrintCharBy from '~/components/common/printCharBy';
import { useState } from 'react';

export default function About() {
  const command = '$ whoami | pretty';
  const [shown, setShown] = useState(false);

  return (
    <div>
      <PrintCharBy str={command} intervalMs={100} callback={() => {
        setShown(true);
      }} />

      {shown &&
        <ProfileBox />
      }
    </div>
  );
}
