import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const query = `
  query {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

export default function() {
  const [todos, updateTodos] = useState([]);

  async function queryTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(query));
      updateTodos(todoData.data.listTodos.items);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  return [todos, queryTodos];
}
