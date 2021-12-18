import { useContext } from "react";
import Alerta from "./Alerta";
import AtivoContext from "./AtivoContext";

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(AtivoContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ativo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    required
                                    value={objeto.nome}
                                    onChange={handleChange} />
                            </div>
                                     
                            <div className="form-group">
                                <label htmlFor="txtDistribuicao" className="form-label">
                                    Distribuição
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtDistribuicao"
                                    name="distribuicao"
                                    required
                                    value={objeto.distribuicao}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtTipo" className="form-label">
                                    Tipo
                                </label>
                                <select
                                    type="text"
                                    className="form-control"
                                    id="txtTipo"
                                    name="tipo"
                                    required
                                    value={objeto.tipo}
                                    onChange={handleChange}>
                                        <option value="1">Renda Fixa</option>
                                        <option value="2">Ações</option>
                                        <option value="3">Fundos Imobiliários</option>
                                    </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtQtd" className="form-label">
                                    Quantidade
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtQtd"
                                    name="qtd"
                                    value={objeto.qtd}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
                                Salvar <i className="bi bi-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;