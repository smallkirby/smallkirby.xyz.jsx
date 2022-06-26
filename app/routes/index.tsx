import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}
