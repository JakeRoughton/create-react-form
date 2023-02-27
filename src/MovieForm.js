import React, { Component } from 'react';

class MovieForm extends Component{

    //Initialize constructors
    constructor(props){
        super(props);

        //Set the initial state of the Form
        this.initialState = {
            title: '',
            actors: '',
            plot: '',
            genre: '',
            imbdRating: '',
            director: '',
            year: '',
        };
        //Set our initial state to state
        this.state = this.initialState
    }

    handleChange = (event) => {
        //get the name, value out of the target
        const { name, value } = event.target;

        //Update state
        this.setState({
            [name]: value
        });
}

onFormSubmit = (event) => {
    //Standard form submission
    event.preventDefault();
    //Set the current state of the form to handle the submission
    this.props.addMovie(this.state);
    //Clear input fields by setting their value to an empty string
    this.setState(this.initialState);
}

//Render the Form
render() {
    //hook iun data from state
    const { title, actors, plot, genre, imbdRating, director, year } = this.state;
    return (
    <div>
    <h2 className="title">Movie List</h2>
        <form onSubmit={this.onFormSubmit}>
        <label htmlFor="title">title:</label><br/>
        <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange}
            /><br/>

            <label htmlFor="actors">actors:</label><br/>
        <input
            type="text"
            id="actors"
            name="actors"
            value={actors}
            onChange={this.handleChange}
            /><br/>

<label htmlFor="plot">plot:</label><br/>
        <input
            type="text"
            id="plot"
            name="plot"
            value={plot}
            onChange={this.handleChange}
            /><br/>

<label htmlFor="genre">genre:</label><br/>
        <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={this.handleChange}
            /><br/>

<label htmlFor="imdbRating">imdbRating:</label><br/>
        <input
            type= "text"
            id="imdbRating"
            name="imdbRating"
            value={imbdRating}
            onChange={this.handleChange}
            /><br/>

<label htmlFor="director">director:</label><br/>
        <input
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={this.handleChange}
            /><br/>

<label htmlFor="year">year:</label><br/>
        <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={this.handleChange}
            /><br/>

        <button type="submit">Submit
        </button>
        </form>
        </div>

        );
    }
}

export default MovieForm