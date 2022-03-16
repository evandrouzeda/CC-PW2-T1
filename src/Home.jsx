import { useEffect, useState } from "react";
import CRUD from "./componentes/CRUD";

const Home = () => {
    const [listaObjetos, setListaObjetos] = useState([]);
    const tipos = {"1": "Renda Fixa", "2": "Ações", "3": "Fundos Imobiliários"}
    const getAtivos = async () =>{
        const ativos = await new CRUD().read("ativo")
        console.log(ativos);
        setListaObjetos(ativos)
    }
    useEffect( () => {
        getAtivos()
    },[]);
    return (
        <div>
            <h1>Seus Ativos</h1>
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">

                    {listaObjetos.map(objeto => (
                        <div key={objeto.id} className="card bg-light mb-3">
                            <div className="card-body">
                                <h3 className="card-title">{objeto.nome}</h3>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text"><strong>Qtd: </strong><br />{objeto.qtd}</p>
                                    <p className="card-text"><strong>Distribuição: </strong><br />{objeto.distribuicao}</p>
                                    <p className="card-text"><strong>Tipo: </strong><br />{tipos[objeto.tipo]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;