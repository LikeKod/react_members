import React from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">The best trainer</h1>
//             <h3 className="centered" style={{color: '#666'}}>In the world</h3>
//         </section>
//     )
// }


export default function IntroSection() {
    return React.createElement(
        'section',
        null,
        [React.createElement('h1', { className: 'centered', key: 1 }, 'The best trainer'),
        React.createElement('h3', { className: 'centered', key: 2, style: { color: '#666' } }, 'In the world')]
    )
}