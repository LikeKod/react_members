import { useState } from "react"
import Button from "./Button/Button"

export default function FeedbackSection() {
    const [name, setName] = useState('')
    const [hasError, setHasError] = useState(true)
    const [reason, setReason] = useState('error')

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function toggleError() {
        setHasError((prev) => !prev) //Based on previous state
    }

    return (
        <section>
            <h3>Feedback</h3>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" className="control" value={name} style={{border: hasError ? '1px solid red' : null}} onChange={handleNameChange} />

                <label htmlFor="reason">The reason for petition</label>
                <select id="reason" className="control" value={reason} onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Offers</option>
                </select>

                <pre>
                    Name: {name}
                    <br />
                    Reason: {reason}
                </pre>

                <Button disabled={hasError} isActive={!hasError} >Send</Button>
            </form>
        </section>
    )
}