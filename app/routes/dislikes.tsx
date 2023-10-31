import type { Like } from 'typings/likes';
import { dislikes as dislikesData } from 'data/dislikes';
import LikeParagraph from 'components/likes/LikeParagraph';
import PrintCharBy from 'components/common/printCharBy';
import { useState } from 'react';

const generateParagraphs = (dislikes: Like[]) => (
  dislikes.map((dislike, ix) => {
    return (
      <LikeParagraph key={ix} like={dislike} />
    );
  })
);

export default function Dislikes({ preRender = false }: {preRender?: boolean}) {
  const command = '$ getsebool -a | grep $SMALLKIRBY | pretty ';
  const [shown, setShown] = useState(preRender);

  return (
    <div>
      {!preRender ?
        <PrintCharBy str={command} intervalMs={50} callback={() => {
          setShown(true);
        }} /> :
        command
      }

      {shown &&
        generateParagraphs(dislikesData)
      }
    </div>
  );
}
