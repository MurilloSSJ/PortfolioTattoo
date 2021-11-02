import React from 'react';
import  Routes from './routes'
import { navMenu } from './Components/navMenu';
export default function App(){
    const menu = React.createElement(navMenu)
    return(
        <>
            {menu}
            <main>
                <Routes></Routes>
            </main>
        </>
    )
}
