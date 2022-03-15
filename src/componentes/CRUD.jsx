import Config from "./Config";
export default class CRUD {
    create(path, value){
        return new Promise(async res => {
            await fetch(`${Config.enderecoapi}/${path}`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json", 
                    "x-access-token": localStorage.getItem("token")
                },
                body: JSON.stringify(value),
            }).then(response => response.json())
                .then(json => res(json));
        })
    }

    read(path){
        return new Promise(async res => {
            await fetch(`${Config.enderecoapi}/${path}`, {
                method: "GET",
                headers: {
                    "x-access-token": localStorage.getItem("token")
                },
            }).then(response => response.json())
                .then(json => res(json));
        })
    }

    update(path, value){
        return new Promise(async res => {
            await fetch(`${Config.enderecoapi}/${path}`, {
                method: "PUT",
                headers: { 
                    "Content-Type": "application/json", 
                    "x-access-token": localStorage.getItem("token")
                },
                body: JSON.stringify(value),
            }).then(response => response.json())
                .then(json => res(json));
        })
    }

    delete(path, id){
        return new Promise(async res => {
            await fetch(`${Config.enderecoapi}/${path}/${id}`, {
                method: "DELETE",
                headers: { 
                    "x-access-token": localStorage.getItem("token")
                },
            }).then(response => response.json())
                .then(json => res(json));
        })
    }
}