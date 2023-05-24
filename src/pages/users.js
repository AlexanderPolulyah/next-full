import Link from "next/link"
import { useEffect, useState } from "react"
import A from "../components/A"
import MainContainer from "../components/MainContainer"
// import '../styles/global.css'

const Users = ({users}) => {
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Alexey'},
    //     {id: 2, name: 'Slavik'},
    //     {id: 3, name: 'Sasha'},
    // ])

    // useEffect(async() => {
    // }, [])

    // const getData = () => {
    //     if(users) {
    //         users.map(user => <li key={user.id}>
    //             <Link href={`/users/${user.id}`}>{user.name}</Link>            
    //         </li>).join('')
    //     } else {
    //         return null
    //     }
    // }

    return(<MainContainer keywords='users page'>
        <div className="navbar">
            <A href='/' text='Главная'/>
            <A href='/users' text='Пользователи'/>
            {/* Link не перерисовывает страницу */}
            {/* <Link href='/' style={{textDecoration: 'none'}}><div className="link">Главная</div></Link>
            <Link href='/users' style={{textDecoration: 'none'}}><div className="link">Пользователи</div></Link> */}
        </div>

        {/* a перерисовывает страницу */}
        {/* <a href="/">Главная</a>
        <a href="/users">Пользователи</a> */}

        <h1>Пользователи</h1>

        <ul>
            {/* {getData()} */}
            {users.map(user => <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>            
            </li>)}
        </ul>
    </MainContainer>)
}
export default Users

export async function getStaticProps(context) {
    // console.log('getStaticProps works')
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    // console.log('users count', users.length)
    return { props: { users } };
}