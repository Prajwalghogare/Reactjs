import logo from './logo.svg';
import './App.css';

function App() {

    const username = "Prajwal"
    const user = { name: 'Prajwal', address: 'Sangamner', phone: "8390110610" }
    return <div className = "App" >

        <
        h1 > My first reactjs application < /h1>

    <
    div > { username }, welcome to the app < /div> <
    hr / >
        <
        div > Name: { user.name } < /div> <
    div > address: { user.address } < /div> <
    div > phone: { user.phone } < /div>

    <
    hr / >





        <
        /div>
}

export default App;