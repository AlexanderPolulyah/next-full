import Head from "next/head"
import A from "./A";

const MainContainer = ({children, keywords}) => {
    return(<div>
        <Head>
            <meta keywords={'Next SSR' + (keywords ? ' - ' : '') + keywords}></meta>
            <title>Главная страница</title>
        </Head>
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

        <div>{children}</div>

        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                    display: flex;
                }
            `}
        </style>        
    </div>)
}
export default MainContainer;