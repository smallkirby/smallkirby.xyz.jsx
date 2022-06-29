import { useState } from 'react';
import SotsuronTweetPanel from '~/components/sotsuron/SotsuronTweetPanel';
import PrintCharBy from '../components/common/printCharBy';
import SotsuronChart from '../components/sotsuron/SotsuronChart';

function SotsuronHelp() {
  return (
    <div className='ml-3 mt-2 mb-4'>
      <div>
        <span className='text-skgreen-light'>Background</span>
        : I had to write a <b className='italic'>bachelor thesis about photonics</b>
        , though I'm absolutely not good at...
      </div>
      <div>
        <span className='text-skgreen-light'>Description</span>
        : I endured the hard time by tweeting what's in my head.
      </div>
      <div>
        <span className='text-skgreen-light'>About</span>
        : Below data is from the collection of tweets I tweeted during write of the thesis.
      </div>
      <div>
        <span className='text-skgreen-light'>Source</span>
        : My secret account of Twitter.
      </div>
      <div>
        <span className='text-skgreen-light'>Deadline</span>
        : 2022/02/09 11:00 AM
      </div>

      <div className='mt-2 text-sm text-skwhite-dark'>
        (Data collection finished on 2022/02/09, and data is now made static.)
      </div>
    </div>
  );
}

export default function Sotsuron({ preRender = false }: {preRender: boolean}) {
  const comHelp = '$ python3 ~/Documents/sotsuron/plot.py --help';
  const [helpComShown, setHelpComShown] = useState(preRender);
  const comPlot = '$ python3 ~/Documents/sotsuron/plot.py --plot';
  const [comPlotShown, setComPlotShown] = useState(preRender);
  const comTweet = '$ /usr/local/sbin/twetter-cli -d ~/Documents/sotsuron/tweets.log --tweet';
  const [comTweetShown, setComTweetShown] = useState(preRender);

  return (
    <div>
      {!preRender ?
        <PrintCharBy str={comHelp} intervalMs={50} callback={() => {
          setHelpComShown(true);
        }} /> :
        comHelp
      }

      {(preRender || helpComShown) &&
        <SotsuronHelp />
      }

      {helpComShown &&
        <PrintCharBy str={comPlot} intervalMs={50} callback={() => {
          setComPlotShown(true);
        }} />
      }

      {comPlotShown &&
        <div className='px-1 md:px-4 w-full pt-2'>
          <SotsuronChart />
        </div>
      }

      {comPlotShown &&
        <div className='mt-4'>
          <PrintCharBy str={comTweet} intervalMs={50} callback={() => {
            setComTweetShown(true);
          }} />
        </div>
      }

      {comTweetShown &&
        <SotsuronTweetPanel />
      }

    </div>
  );
}
