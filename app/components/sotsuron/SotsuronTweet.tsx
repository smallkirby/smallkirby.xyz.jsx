import moment from 'moment';
import { useState } from 'react';
import type { SotsuronTweet as Tweet } from 'typings/sotsuron';

function TweetButtons() {
  const [favHovered, setFavHovered] = useState(false);
  const [retweetHovered, setRetweetHovered] = useState(false);
  const [replyHovered, setReplyHovered] = useState(false);

  return (
    <div className='flex justify-between mt-4'>
      <a
        href="https://nirugiri.smallkirby.xyz"
        target="_blank" rel="noreferrer"
      >
        <img
          className="w-6 fill-white" alt='reply'
          src={replyHovered ? '/img/reply-hovered.png' : '/img/reply.png'}
          onMouseOver={() => setReplyHovered(true)}
          onMouseLeave={() => setReplyHovered(false)}
        />
      </a>
      <a
      // eslint-disable-next-line max-len
        href="https://twitter.com/intent/tweet?text=DON%27T%20RETWEET%20PRIVATE%20ACOUNT%21%21%21DON%27T%20RETWEET%20PRIVATE%20ACOUNT%21%21%21DON%27T%20RETWEET%20PRIVATE%20ACOUNT%21%21%21DON%27T%20RETWEET%20PRIVATE%20ACOUNT%21%21%21"
        target="_blank" rel="noreferrer"
      >
        <img
          className="w-6 fill-white" alt='retweet'
          src={retweetHovered ? '/img/retweet-hovered.png' : '/img/retweet.png'}
          onMouseOver={() => setRetweetHovered(true)}
          onMouseLeave={() => setRetweetHovered(false)}
        />
      </a>
      <a href="https://kaguya.love" target="_blank" rel="noreferrer">
        <img
          className="w-6 fill-white" alt='fav'
          src={favHovered ? '/img/fav-hovered.png' : '/img/fav.png'}
          onMouseOver={() => setFavHovered(true)}
          onMouseLeave={() => setFavHovered(false)}
        />
      </a>
    </div>
  );
}

export default function SotsuronTweet({ tweet }: {tweet: Tweet}) {
  return (
    <div
      className='border-[0.1em] border-skblack-light mx-auto mb-8 px-2 pt-4 pb-2 md:w-1/2 rounded-md shadow-md flex-col'
    >
      <div className='flex'>
        <div className='mr-2'>
          <img src="/img/simple-transparent.png" className="w-14" alt='largekirby' />
        </div>

        <div className="flex flex-col w-full mr-2">
          <div className="flex mb-1 justify-between flex-col md:flex-row">
            <div className="flex">
              <p className="font-bold mr-2">
              largekirby
              </p>
              <a
                className="text-skwhite-dark mr-2"
                href="https://twitter.com/smallkirby_"
              >
              @smallkirby_
              </a>
              <p>({ tweet.done_pages } P)</p>
            </div>
            <div className="text-skwhite-dark">
              { moment.unix(tweet.timestamp).format('YYYY/MM/DD HH:mm:ss') }
            </div>
          </div>

          <div>
            <p>{ tweet.text }</p>
          </div>
        </div>
      </div>

      <div className="mt-1 w-1/2 mx-auto">
        <TweetButtons />
      </div>
    </div>
  );
}
