import './Button.css'

export default function Button({ children }) {
    function handleClick() {

    }

    return <button className='button' onClick={handleClick}>{children}</button>
}