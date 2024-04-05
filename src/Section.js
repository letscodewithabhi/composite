import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null)
export default function Section() {

    const [theme, setTheme] = useState('white')

    return (
        <ThemeContext.Provider value={theme}>
            <Form title="a new form">
                <Button>a</Button>
                <Button>b</Button>
                <DarkThemeCheckBox setTheme={setTheme} theme={theme}/>
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

function DarkThemeCheckBox({theme, setTheme}) {
    return (
        <>
            <input type="checkbox" checked={theme === 'black'} onChange={(e)=>{
                setTheme(e.target.checked ? 'black' : 'white')
            }}/>
            <span>Use a Dark Theme</span>
        </>
    )
}