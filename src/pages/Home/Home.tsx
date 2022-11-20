import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

export const Home: FunctionComponent = () => (
  <>
    <h1>Bordspelhulpje</h1>

    <ul>
      <li>
        <Link to="/monopolie">Monopolie</Link>
      </li>
    </ul>
  </>
)
