export  default function Header() {
    return (
    <Header>
        <h1>projeto escola</h1>
        <nav>
            <ul>
                <li><Link href='/'>inicio</Link></li>
                <li><Link href='/cadaaluno'>alunos - cadastro</Link></li>
                <li><Link href='/listaaluno'>alunos - lista</Link></li>
                <li><Link href='/notaaluno'>alunos - cadastro de notas</Link></li>
                <li><Link href='/listnota'>alunos - lista de notas8</Link></li>
            </ul>
        </nav>
    </Header>
)
}