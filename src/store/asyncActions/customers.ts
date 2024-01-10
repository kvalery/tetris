import { actionGetJson } from '../actions/actions';
import { Dispatch } from 'redux';

export const fetchCustomers = ( ) =>{
  return function( dispatch: any ){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => dispatch(actionGetJson(json)) )
  }
}
