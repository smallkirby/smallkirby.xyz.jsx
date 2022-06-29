import SotsuronChart from '../components/sotsuron/SotsuronChart';

export default function Sotsuron({ preRender = false }: {preRender: boolean}) {
  return (
    <div>
      <SotsuronChart />
    </div>
  );
}
