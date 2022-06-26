import type { Like } from '../../typings/likes';
import { dislikes as dislikesData } from '../../data/dislikes';
import LikeParagraph from '../components/likes/LikeParagraph';
import PrintCharBy from '~/components/common/printCharBy';
import { useState } from 'react';

const generateParagraphs = (dislikes: Like[]) => (
  dislikes.map((dislike, ix) => {
    return (
      <LikeParagraph key={ix} like={dislike} />
    );
  })
);

export default function Dislikes() {
  const command = '$ getsebool -a | grep $SMALLKIRBY | pretty ';
  const [shown, setShown] = useState(false);

  return (
    <div>
      <PrintCharBy str={command} intervalMs={50} callback={() => {
        setShown(true);
      }} />

      {shown &&
        generateParagraphs(dislikesData)
      }
    </div>
  );
};
