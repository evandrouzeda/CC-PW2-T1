import { Component } from "react";

export default class Alert extends Component {
    state = { msg: "teste" }
    mostraAlert(status) {
        console.log(`${status.status} - ${status.msg}`);
        switch (status.status) {
            case "success":
                /**
                 * Nao entendi pq, mas quando uso o setState 
                 * para mudar o msg ele entra num loop infinito
                 */
                //this.setState({ msg: status.msg })
                return "alert alert-success"
            case "error":
                //this.setState({ msg: status.msg })
                return "alert alert-danger"
            default:
                return "d-none"
        }
    }
    render() {
        return (
            <div className={this.mostraAlert(this.props.status)} role="alert">
                {this.state.msg}
            </div>
        )
    }
}