import React from "react";
//rsf
function Header() {
    return (
        <>
            Header
        </>
    )
}

function Footer() {
    return (
        <>
            Footer
        </>
    )
}

function Content() {
    return (
        <>
            Content: <br />
            <Welcome name="Test" message="Welcome to my first App" />
            <br />
            <Welcome name="ABC" message="Welcome to my first App" />

        </>
    )
}

function Welcome(props) {
    return (
        <div>
            Hi {props.name}, {props.message}
        </div>
    );
}

// function AppFunction() {
//     return (
//         <>
//             <Header />
//             <br />
//             <Content />
//             <br />
//             <Footer />
//         </>
//     )
// }
// export default AppFunction;

//import React from 'react';

function AppFunction() {
    return (
        <>
            <Header />
            <br />
            <Content />
            <br />
            <Footer />
        </>
    );
}

export default AppFunction;