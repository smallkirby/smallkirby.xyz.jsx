import { useState } from 'react';
import { Link } from 'react-router-dom';
import PrintCharBy from 'components/common/printCharBy';
import { ShellResult } from 'components/shell/ShellParagraph';

export default function Index({ preRender = false }: {preRender?: boolean}) {
  const whoamiCom = '$ whoami';
  const [whoamiShown, setWhoamiShown] = useState(preRender);
  const statCom = '$ cat /proc/stat | pretty';
  const [statSwhon, setStatSwhon] = useState(preRender);
  const gitCom = '$ git remote show origin';
  const [gitShown, setGitShown] = useState(preRender);
  const tmuxCom = '$ tmux --help';
  const [tmuxShown, setTmuxShown] = useState(preRender);
  const lsCom = '$ ls -la';
  const [lsShown, setLsShown] = useState(preRender);
  const toyCom = '$ /home/smallkirby/enjoy';
  const [toyShown, setToyShown] = useState(false);

  return (
    <div>
      {!preRender ?
        <PrintCharBy str={whoamiCom} intervalMs={100} callback={() => {
          setWhoamiShown(true);
        }} /> :
        whoamiCom
      }

      {whoamiShown &&
        <div className='pb-4'>
          <Link to='about'>smallkirby</Link>
        </div>
      }

      {whoamiShown &&
        <PrintCharBy str={statCom} intervalMs={50} callback={() => {
          setStatSwhon(true);
        }} />
      }

      {statSwhon &&
        <div className='pb-4 mt-2'>
          <img src='https://img.shields.io/badge/version-LYSITHEA-blueviolet.svg'
            alt='version' className='mr-2 mb-2 md:float-left' />
          <img src='https://github.com/smallkirby/smallkirby.xyz.jsx/actions/workflows/build.yml/badge.svg'
            alt='build' className='mr-2 mb-2 md:float-left'/>
          <img src='https://github.com/smallkirby/smallkirby.xyz.jsx/actions/workflows/deploy.yml/badge.svg'
            alt='deploy' className='mr-2 mb-2'/>
        </div>
      }

      {statSwhon &&
        <PrintCharBy str={gitCom} intervalMs={50} callback={() => {
          setGitShown(true);
        }} />
      }

      {gitShown &&
        <div className='pb-4'>
          <p>* remote origin</p>
          <div className='pl-2'>
            <span>Fetch URL: </span>
            <a href='https://github.com/smallkirby/smallkirby.xyz.jsx' target='_blank' rel="noreferrer">
              https://github.com/smallkirby.xyz.jsx
            </a>
          </div>
        </div>
      }

      {gitShown &&
        <PrintCharBy str={tmuxCom} intervalMs={50} callback={() => {
          setTmuxShown(true);
        }} />
      }

      {tmuxShown &&
        <div className='flex-col ml-4 pb-4'>
          <div>
            <p className='text-skgreen bold'>Session control:
              <span className='text-skblue-light italic ml-2'>Available</span>
            </p>
            <div className='ml-4'>
              <p>Click green caret in the top bar to control current sessions.</p>
            </div>
          </div>

          <div className='hidden md:block'>
            <p className='text-skgreen bold'>2-column pane:
              <span className='text-skblue-light italic ml-2'>Available</span>
            </p>
            <div className='ml-4'>
              You can use bash interface in the left pane.
            </div>
          </div>
          <div className='md:hidden'>
            <p className='text-skgreen bold'>2-column pane:
              <span className='text-skred-dark italic ml-2'>Unavailable</span>
            </p>
            <div className='ml-4'>
              Use more wide screen to use bash interface.
            </div>
          </div>
        </div>
      }

      {tmuxShown &&
        <PrintCharBy str={lsCom} intervalMs={50} callback={() => {
          setLsShown(true);
        }} />
      }

      {lsShown &&
        <ShellResult command={'ls'} />
      }

      {!preRender && lsShown &&
        <div className='pt-4'>
          <PrintCharBy str={toyCom} intervalMs={50} callback={() => {
            setToyShown(true);
          }} />
        </div>
      }

      {!preRender && toyShown &&
        <div className='ml-2'>enjoying...</div>
      }
    </div>
  );
}
