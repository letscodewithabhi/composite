import {createContext, useContext} from "react";

const ThemeContext = createContext('black')
export default function Section() {
    return (
        <ThemeContext.Provider value="white">
            <Form title="a new form">
                <Button>a</Button>
                <Button>b</Button>
            </Form>
        </ThemeContext.Provider>
    )
}

function Form({title, children}) {
    return (
        <>
            <Title title={title}/>
            {children}
        </>
    )
}

function Title({title}) {
    const theme = useContext(ThemeContext)
    return (
        <h1 className={theme}>{title}</h1>
    )
}

function Button({children}) {
    const theme = useContext(ThemeContext)
    return (
        <button className={theme}>{children}</button>
    )
}