import React, { Component } from 'react';
import './BarList.css';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class BarList extends Component {
    render() {
        return (
            <div className="bar-list">
                <h1 className="display-4">Список баров</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bars.map((bar, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{bar.id}</th>
                                    <td>{bar.title}</td>
                                    <td>
                                        <Link to={`/bar/${bar.id}`}>Просмотреть</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bars: state.bars
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BarList);
