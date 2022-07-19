import type { Like } from 'typings/likes';
import { likes as likesData } from 'data/likes';
import LikeParagraph from 'components/likes/LikeParagraph';
import PrintCharBy from 'components/common/printCharBy';
import { useState } from 'react';

const generateParagraphs = (likes: Like[]) => (
  likes.map((like, ix) => {
    return (
      <LikeParagraph key={ix} like={like} />
    );
  })
);

export default function Likes({ preRender = false }: {preRender?: boolean}) {
  const command = '$ find /home/smallkirby/likes/ -type f | xargs grep like | grep -v lazy ';
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
        generateParagraphs(likesData)
      }
    </div>
  );
};
