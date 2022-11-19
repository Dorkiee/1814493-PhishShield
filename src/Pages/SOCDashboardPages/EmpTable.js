import axios from "axios"
import React, {Component} from "react"
import Button from 'react-bootstrap-buttons';
import { Link } from 'react-router-dom';

export default class  EmpTable extends Component {

    render () {
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.email}</td>
                <td>department here</td>
                <td>{this.props.obj.role}</td>
                <td>not completed</td>
                <td>
                    <Link className="edit-link" to={"/edits/" + this.props.obj._id}>
                        Edit
                    </Link>
                    
                </td>
            </tr>
        )
    }
}