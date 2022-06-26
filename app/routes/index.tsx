import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/likes'>Likes</Link>
        </li>
        <li>
          <Link to='/dislikes'>Dislikes</Link>
        </li>
        <li>
          <Link to='/pronunciation'>Pronunciation</Link>
        </li>
      </ul>
    </div>
  );
}
