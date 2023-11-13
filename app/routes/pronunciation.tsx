import type { Pronunciation as PronType } from 'typings/pronunciation';
import { vocabs } from 'data/pronunciations';
import PronunciationParagraph from 'components/pronunciation/pronunciationParagraph';
import PrintCharBy from 'components/common/printCharBy';
import { useState } from 'react';

const generateParagraphs = (prons: PronType[]) => (
  prons.map((pron, ix) => {
    return (
      <PronunciationParagraph key={ix} pron={pron} />
    );
  })
);

export default function Pronunciation({ preRender = false }: {preRender?: boolean}) {
  const command = '$ diff /home/user/smallkirby/vocabulary /var/www/worlds/vocabulary | uniq ';
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
        generateParagraphs(vocabs)
      }
    </div>
  );
};
