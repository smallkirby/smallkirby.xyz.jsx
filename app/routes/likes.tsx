import type { Like } from '../../typings/likes';
import { likes as likesData } from '../../data/likes';
import LikeParagraph from '../components/likes/LikeParagraph';

const generateParagraphs = (likes: Like[]) => (
  likes.map((like, ix) => {
    return (
      <LikeParagraph key={ix} like={like} />
    );
  })
);


export default function Likes() {
  return (
    <div>
      {generateParagraphs(likesData)}
    </div>
  );
};
