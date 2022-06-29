import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PrintCharBy from '../components/common/printCharBy';

export default function NotFound() {
  const path = useLocation().pathname.substring(1);
  const [pathShown, setPathShown] = useState(false);

  return (
    <div>
      <PrintCharBy str={`$ cd ${path}`} intervalMs={100} callback={() => {
        setPathShown(true);
      }} />

      {pathShown &&
        <div>
          cd: Directory '{path}' not found.
        </div>
      }
    </div>
  );
}
