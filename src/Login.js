import {createContext, useContext, useState} from "react";

const ThemeContext = createContext('light')
export default function Login() {
    const [login, setLogin] = useState(false)
    return (
        <ThemeContext.Provider value={{login, setLogin}}>
            <Form/>
        </ThemeContext.Provider>
    )
}

function Form() {
    return (
        <SectionA header="Login Form">
            <LoginButton />
        </SectionA>
    )
}

function SectionA({header, children}) {
    return (
        <>
            <Header txt={header}/>
            {children}
        </>
    )
}

function LoginButton() {
    const {login, setLogin} = useContext(ThemeContext)

    function onClick() {
        setLogin(true)
    }

    return (
        login ? <LoggedTxt txt="You're logged in"/> : <Button onClick={onClick}>Login</Button>
    )
}

function LoggedTxt({txt}) {
    const {login, setLogin} = useContext(ThemeContext)

    function onClick() {
        setLogin(false)
    }
    return (
        <>
            <div>{txt}</div>
            <Button onClick={onClick}>Logout</Button>
        </>
    )
}

function Header({txt}) {
    return <h1>{txt}</h1>
}

function Button({children, onClick}) {
    return <button onClick={onClick}>{children}</button>
}