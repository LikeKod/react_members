import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import {ways} from './data'


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>My approach to learning</h3>

          <ul>
            <WayToTeach {...ways[0]}/>
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
            <WayToTeach {...ways[3]}/>
          </ul>
        </section>
        <section>
          <h3>What i do?</h3>
          <Button>Click</Button>
          <Button>No Click</Button>
        </section>
      </main>
    </div>
  )
}

