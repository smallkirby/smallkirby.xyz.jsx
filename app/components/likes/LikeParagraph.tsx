import type { Like } from '../../../typings/likes';

const likeEntSentence = (like: Like) => (
  like.ents.map((ent, ix) => {
    const { link, description, name } = ent;
    return (
      <div className="ml-1 md:ml-3 flex" key={ix}>
        <ul className='flex flex-col md:flex-row justify-start'>
          <li>
            <p>
              - <a href={link ?? '#'}>{name}</a>
            </p>
          </li>
          <li>
            {description &&
              <div>
                <p className='hidden md:block md:ml-2 ml-8'>: {description}</p>
                <p className='md:hidden ml-8'>{description}</p>
              </div>
            }
          </li>
        </ul>
      </div>
    );
  })
);

export default function LikeParagraph(props: {like: Like}) {
  return (
    <div className="mx-2 md:mx-4 mb-2">
      <div>
        <p className="font-bold text-xl mt-2">
          { props.like.title }
        </p>
      </div>

      {likeEntSentence(props.like)}
    </div>
  );
};
