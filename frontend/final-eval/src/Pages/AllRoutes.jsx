import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogspage from './Blogspage'
import Login from './Login'
import Signup from './Signup'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={< Blogspage />} />
                <Route path='/login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                {/* //<Route path=''  element={ < /> }/> */}
            </Routes>
        </div>
    )
}

export default AllRoutes