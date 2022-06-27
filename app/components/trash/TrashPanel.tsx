import type { Trash } from 'typings/trash';
import { useEffect, useState } from 'react';
import { url2info, getRepoInfo } from '../../lib/github';
import type { LanguageOccupation, RepositoryInfo } from 'typings/github';
import moment from 'moment';

const langOccupation2string = (occupations: LanguageOccupation[]): string => {
  return occupations.map((occupation) => {
    const ratio = Math.ceil(occupation.ratio * 100);
    return `${occupation.lang}(${ratio}%)`;
  }).join(', ');
};

function TrashSentence( { trash, repoInfo }: {trash: Trash, repoInfo: RepositoryInfo} ) {
  return (
    <div className='mx-auto w-full'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mr-2 justify-center content-center flex'>
          <img src={trash.image_path} alt={trash.title} className='rounded-2xl drop-shadow-lg h-48 text-center'/>
        </div>

        <div className='mx-2 mt-2 py-2 px-2 shadow-lg w-full md:w-1/2'>
          <table className="mx-auto md:float-left">
            <tbody>
              <tr>
                <td className='text-skblue'>Star</td>
                <td className="pl-2">
                  : { repoInfo.stargazers_count }
                </td>
              </tr>
              <tr>
                <td className='text-skblue'>Watcher</td>
                <td className="pl-2">
                  : { repoInfo.subscribersCount }
                </td>
              </tr>
              <tr>
                <td className='text-skblue'>Forks</td>
                <td className="pl-2">
                  : { repoInfo.forks }
                </td>
              </tr>
              <tr>
                <td className='text-skblue'>Commits</td>
                <td className="pl-2">
                  : { repoInfo.totalCommits }
                </td>
              </tr>
              <tr>
                <td className='text-skblue'>Last update</td>
                <td className="pl-2">
                  : { moment(repoInfo.updatedAt).format('YYYY/MM/DD HH:mm') }
                </td>
              </tr>
              <tr>
                <td className='text-skblue'>Language</td>
                <td className="pl-2">
                  <div className='flex'>
                    <div className='mr-2'>: </div>
                    <div className='overflow-hidden'> { langOccupation2string(repoInfo.languages) }</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="mt-5 pt-5 md:pt-4 text-center mx-auto w-5/6">
        <pre className="whitespace-pre-wrap">{ trash.description }</pre>
      </div>
    </div>
  );
}

export default function TrashPanel({ trash, neverFetch = false }: {trash: Trash, neverFetch?: boolean}) {
  const [repoInfo, setRepoInfo] = useState<RepositoryInfo | null>(null);

  useEffect(() => {
    if (!neverFetch) {
      const fetchRepo = async () => {
        const basicInfo = url2info(trash.title_link);
        if (basicInfo === null) return;
        const repo = await getRepoInfo(basicInfo.owner, basicInfo.reponame);
        setRepoInfo(repo);
      };
      fetchRepo().catch(console.error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <fieldset
      className='w-full border-2 border-skblack-light rounded-lg p-4 ml-2 mr-4 my-10 flex-col shadow-lg'>
      <legend className='px-4 text-3xl'>
        <a href={trash.title_link} target='_blank' rel="noreferrer">{trash.title}</a>
      </legend>

      {repoInfo === null ?
        <div className='w-full'>
          <div className='relative text-4xl left-0 z-30 text-skblack-light mx-auto w-full text-center'>
            Now Loading...
          </div>
          <div className='mx-auto w-1/3 px-auto'>
            <img src={'/img/simple-transparent.png'} alt='loading' className='blur-sm grayscale mx-auto'/>
          </div>
        </div> :

        <TrashSentence trash={trash} repoInfo={repoInfo} />
      }
    </fieldset>
  );
}
