import type { Pronunciation } from '../../../typings/pronunciation';

const generateParagraphs = (pron: Pronunciation) => (
  pron.ents.map((ent, ix) => {
    return (
      <div key={ix} className="ml-1 md:ml-3 flex">
        <ul className="flex flex-col md:flex-row">
          <li>
            <p>
            - <a href={ent.link ?? '#'}>{ ent.name }</a>
            : [
              {ent.strict ?
                <span className="italic mx-2 px-0">
                  { ent.pronountiation }
                </span> :
                <span className="mx-2 px-0">
                  { ent.pronountiation }
                </span>
              }
            ]
            </p>
          </li>
          <li>
            {ent.description ?

              <p className="md:block hidden ml-2 text-skwhite-dark">
              : { ent.description }
              </p> :
              <p className="md:hidden ml-8">
                { ent.description }
              </p>
            }
          </li>
        </ul>
      </div>
    );
  })
);

export default function PronunciationParagraph(props: {pron: Pronunciation}) {
  const pron = props.pron;

  return (
    <div className="mx-2 md:mx-4 mb-2">
      <div>
        <p className="font-bold text-xl mt-2">
          { pron.genre }
        </p>
      </div>
      { generateParagraphs(pron) }
    </div>
  );
};
