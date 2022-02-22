
import SignupPage from '../src/Materials/Signup'
import SigninPage from '../src/Materials/Signin'
import TasksPage from '../src/Materials/Tasks'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
    return <div className = "container" >

    <BrowserRouter>
       <h1 className = 'header' > Welcome to task manager</h1> 

    <Routes>
    <Route path = 'Signup' element = {<SignupPage/>}/> 
    <Route path = 'Signin'element = {<SigninPage/>}/> 
    <Route path = 'Tasks'element = {<TasksPage/>}/>
    </Routes> 
    </BrowserRouter>
    </div>
}

export default App