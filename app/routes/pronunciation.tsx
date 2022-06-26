import type { Pronunciation as PronType } from '../../typings/pronunciation';
import { vocabs } from '../../data/pronunciations';
import PronunciationParagraph from '../components/pronunciation/pronunciationParagraph';

const generateParagraphs = (prons: PronType[]) => (
  prons.map((pron, ix) => {
    return (
      <PronunciationParagraph key={ix} pron={pron} />
    );
  })
);

export default function Pronunciation() {
  return (
    <div>
      {generateParagraphs(vocabs)}
    </div>
  );
};
