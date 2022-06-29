import { sotsuronTweets } from 'data/sotsuron';
import SotsuronTweet from './SotsuronTweet';

export default function SotsuronTweetPanel() {
  return (
    <div className='mt-2 flex-col justify-center content-center mx-auto px-auto pt-4'>
      {Array(sotsuronTweets.length).fill(0).map((_, ix) => (
        <SotsuronTweet key={ix} tweet={sotsuronTweets[ix]} />
      ))}
    </div>
  );
}
