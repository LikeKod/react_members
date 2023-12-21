import WayToTeach from './WayToTeach'
import { ways } from '../data'

export default function TeachingSection() {
    return (
        <section>
            <h3>My approach to learning</h3>

            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} {...way} />
                ))}
            </ul>
        </section>
    )
}