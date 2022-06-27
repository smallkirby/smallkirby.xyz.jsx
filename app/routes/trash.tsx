import TrashPanel from '../components/trash/TrashPanel';
import { trashes } from 'data/trash';

export default function Trash({ preRender = false }: {preRender?: boolean}) {
  return (
    <div className='pt-8 w-full md:w-2/3 flex-col mx-auto pr-8'>
      {Array(trashes.length).fill(0).map((_, ix) => (
        <TrashPanel key={ix} trash={trashes[ix]} neverFetch={preRender} />
      ))}
    </div>
  );
}
