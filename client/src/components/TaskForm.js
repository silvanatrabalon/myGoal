import React, { useState } from 'react'
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";


const CREATE_TASKS = gql`
  mutation CreateTask($title: String!, $content: String!, $author: String!){
    createTask(title: $title, content: $content, author: $author){
      _id
      title
      content
      author
    }
  }
`;

const TaskForm = () => {
  const [content, setContent] = useState('') //start empty
  const [title, setTitle] = useState('') //start empty
  const [author, setAuthor] = useState('') //start empty
  const [createTask] = useMutation(CREATE_TASKS) //Create mutation, and get the function

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 p-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={
                e => {
                  e.preventDefault();
                  console.log(title)
                  createTask({variables: {title, content, author}})
                }
              } >
              <div className="form-group">
               <input type="text" placeholder="Author" className="form-control" value={author} onChange={ e => setAuthor(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Title" className="form-control" value={title} onChange={ e => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                <textarea rows="2" placeholder="Content..." className="form-control" value={content} onChange={ e => setContent(e.target.value)}></textarea>
              </div>
              <button className="btn btn-success btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TaskForm;