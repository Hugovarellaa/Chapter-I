const repositoryName = 'unform 2'


export function RepositoryList() {
    return (
        <section className="repository-List">
            <h1>Lista de repositórios</h1>


            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Foms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Foms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Foms in React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>

            </ul>
        </section>
    );
}