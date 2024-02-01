import Button from '../components/Button/Button'
import { useState } from 'react'
import { differences } from '../data'

export default function ButtonSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
      setContentType(type)
    }

    return (
        <section>
            <h3>What i do?</h3>
            <Button isActive={contentType == 'way'} onClick={() => handleClick('way')}>Click</Button>
            <Button isActive={contentType == 'easy'} onClick={() => handleClick('easy')}>No Click</Button>
            <Button isActive={contentType == 'program'} onClick={() => handleClick('program')}>WTF</Button>

            {!contentType && <p>Click Button</p>}
            {contentType && <p>{differences[contentType]}</p>}

        </section>
    )
}