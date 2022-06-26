import type { Like } from '../../typings/likes';
import { dislikes as dislikesData } from '../../data/dislikes';
import LikeParagraph from '../components/likes/LikeParagraph';

const generateParagraphs = (dislikes: Like[]) => (
  dislikes.map((dislike, ix) => {
    return (
      <LikeParagraph key={ix} like={dislike} />
    );
  })
);

export default function Dislikes() {
  return (
    <div>
      {generateParagraphs(dislikesData)}
    </div>
  );
};
