
export const Header = (
    props: { userName: string, userEmail: string}
) => {

    return(
        <div>
            <div>
                <h1>{props.userName}</h1>
                <p>{props.userEmail}</p>
            </div>
            <div>
                {/* fazer a lógica dos cards aqui */}
            </div>
        </div>
    );
}