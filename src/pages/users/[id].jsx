import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/user.module.scss'

export default function User({user}) {
    const {query} = useRouter()
    // console.log(router)

    return(<MainContainer keywords={user.name}>
        <h1>Пользователь {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
    </MainContainer>)
}

export async function getServerSideProps({params}) {
    // console.log('params', params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return { props: { user } };
}