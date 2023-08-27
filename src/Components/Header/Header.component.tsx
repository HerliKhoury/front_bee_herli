
export const Header = (
    props: { userName: string, userEmail: string}
) => {

    return(
        <div>
            <div>
                <div>
                    <h1>{props.userName}</h1>
                    <p>{props.userEmail}</p>
                </div>
                <div>
                    <button>Cadastrar imóvel</button>
                    <button>Logout</button>
                </div>
            </div>
            <div>
                {/* fazer a lógica dos cards aqui */}
            </div>
        </div>
    );
}