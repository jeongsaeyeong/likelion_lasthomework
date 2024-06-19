import React from 'react'
import Main from './components/Section/Main'
import Footer from './components/Section/Footer'
import Headers from './components/Section/Headers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route path='/' element={<Main />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App