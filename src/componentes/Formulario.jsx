import { useContext } from "react";
import Alerta from "./Alerta";
import LivroContext from "./LivroContext";

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(LivroContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Livro</h5>
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
                                <label htmlFor="txtTitulo" className="form-label">
                                    Título
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtTitulo"
                                    name="titulo"
                                    required
                                    value={objeto.titulo}
                                    onChange={handleChange} />
                            </div>
                                     
                            <div className="form-group">
                                <label htmlFor="txtAutor" className="form-label">
                                    Autor
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtAutor"
                                    name="autor"
                                    required
                                    value={objeto.autor}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtAno" className="form-label">
                                    Ano
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtAno"
                                    name="ano"
                                    value={objeto.ano}
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