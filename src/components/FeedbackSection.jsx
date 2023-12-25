import { useState, useRef } from "react"
import Button from "./Button/Button"


function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handlKeyDown(event) {
        if(event.key === 'Enter'){
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input type="text" 
            ref={input}
            onKeyDown={handlKeyDown}
            className="control" />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    }
    )
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState('error')

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    // function toggleError() {
    // setHasError((prev) => !prev) //Based on previous state
    // }

    return (
        <section>
            <h3>Feedback</h3>

            {/* <Button onClick={toggleError}>Toggle Error</Button> */}

            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" className="control" value={form.name} style={{ border: form.hasError ? '1px solid red' : null }} onChange={handleNameChange} />

                <label htmlFor="reason">The reason for petition</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) => setForm(prev => ({ ...prev, reason: event.target.value }))}>
                    <option value="error">Error</option>
                    <option value="help">Need help</option>
                    <option value="suggest">Offers</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError} >Send</Button>

            </form>
            <StateVsRef />
        </section>
    )
}