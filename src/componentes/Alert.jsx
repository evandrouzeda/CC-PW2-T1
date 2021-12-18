import { Component } from "react";

export default class Alert extends Component {
    mostraAlert(status) {
        console.log(`${status.status} - ${status.msg}`);
        switch (status.status) {
            case "success":
                return "alert alert-success"
            case "error":
                return "alert alert-danger"
            default:
                return "d-none"
        }
    }
    render() {
        return (
            <div className={this.mostraAlert(this.props.status)} role="alert">
                {this.props.status.msg}
            </div>
        )
    }
}