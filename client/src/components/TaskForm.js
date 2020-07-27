import React from 'react'
import { gql } from "apollo-boost";

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
  return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Author" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Title" className="form-control" />
              </div>
              <div className="form-group">
                <textarea rows="2" placeholder="Content..." className="form-control"></textarea>
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