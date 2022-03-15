import { useContext } from "react";
import AtivoContext from "./AtivoContext";
import Alerta from '../Alerta'


const Tabela = () => {

    const { listaObjetos, acaoRemover, alerta,
        setObjeto, setEditar, setAlerta } = useContext(AtivoContext);

    return (
        <div style={{ padding: '20px' }}>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={
                    () => {
                        setObjeto({ id: 0, titulo: "", autor: "", ano: "" });
                        setEditar(false);
                        setAlerta({ status: "", message: "" })
                    }
                }>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Distribuição</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Qtd</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <th scope="row" style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-info"
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={
                                                () => {
                                                    setObjeto(objeto);
                                                    setEditar(true);
                                                    setAlerta({ status: "", message: "" })
                                                }
                                            }>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => acaoRemover(objeto)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </th>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.distribuicao}</td>
                                    <td>{objeto.tipo}</td>
                                    <td>{objeto.qtd}</td>
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
