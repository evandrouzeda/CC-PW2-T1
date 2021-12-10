import { useContext } from "react";
import LivroContext from "./LivroContext";

const Tabela = () => {

    const { listaObjetos, acaoRemover } = useContext(LivroContext);

    return (
        <div style={{ padding: '20px' }}>
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">ID</th>
                                <th scope="col">Título</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <th scope="row" style={{ textAlign: 'center' }}>
                                        <button className="btn btn-danger"
                                            onClick={() => acaoRemover(objeto)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </th>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.titulo}</td>
                                    <td>{objeto.autor}</td>
                                    <td>{objeto.ano}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}

export default Tabela;
