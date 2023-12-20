import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date()
    return (
        <header>
            <img src={logo} alt="Hey" />
            {/* <h3>Pam pam pam</h3> */}


            <span>Current time: {now.toLocaleTimeString()}</span>
        </header>
    )
}