import React, { Component } from 'react';
import axios from 'axios';

class FormMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    axios
      .post('https://post-a-form.herokuapp.com/api/employees/', this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Employé ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
      });
  }

  render() {
    return (
      <div className='FormEmployee'>
        <h1>Saisie d'un employé</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='movie'>Nom</label>
              <input
                type='text'
                id='moviename'
                name='movie'
                onChange={this.onChange}
                value={this.state.movie}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='firstname'>Prénom</label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='comment'>Write your comment here</label>
              <input
                type='textarea'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <div className='form-data'>
              <label htmlFor='submit'>send</label>
              <input
                type='button'
                id='submit-btn'
                name='submit-btn'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovies;
