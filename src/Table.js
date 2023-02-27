import React, { Component } from 'react';

//Table Header Component
const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>title</th>
                <th>actors</th>
                <th>plot</th>
                <th>imdbRating</th>
                <th>director</th>
                <th>year</th>
                <th>dateAdded</th>
            </tr>
        </thead>
    );
}

//Table Body Component
const TableBody = (props) =>{

//Table Row Component
    const rows = props.data.map((row, index) =>{
    return(
        <tr key={index}>
        <td>{row.title}</td>
        <td>{row.actors}</td>
        <td>{row.plot}</td>
        <td>{row.imdbRating}</td>
        <td>{row.director}</td>
        <td>{row.year}</td>
        <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>
        </tr>
        )
    })
//Return rows wrapped in TableRow Component
    return <tbody>{rows}</tbody>
}

//Table Component
class Table extends Component {
    render() {
    //Props passed in from App.js
    const{
        movies,
        removeMovie
    } = this.props;

    return (
        <table>
            <TableHeader/>
            <TableBody
            data={movies}
            removeMovie={removeMovie}
            />
        </table>
        )
    }
}


export default Table