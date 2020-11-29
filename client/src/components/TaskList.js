import React from "react"
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TASKS = gql`
  {
    task{
      _id
      title
      content
      author
    } 
  }
`;
const REMOVE_TASKS = gql`
  mutation RemoveTask($_id: ID!){
    removeTask(_id: $_id)
  }
`;

const TaskList = () => {
  const {loading, error, data} = useQuery(GET_TASKS) //exec query just when has to render the component
  const [removeTask] = useMutation(REMOVE_TASKS) //Create mutation, and get the function
  if (loading) return <p>Loading tasks...</p>
  if (error) return <p>Error</p>

  return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {
          data.task.map(({_id, title, content, author}) => (
             <div key={_id} className="card m-2">
               <div className="card-body">
               <form onSubmit={
                  async e => {
                    e.preventDefault();
                    await removeTask({variables: {_id}})
                    window.location.href="/" //we can use the router too
                  }
                } >
                  <button className="btn btn-danger float-right btn-sm" data-dismiss="modal">Remove</button>
                </form>
                <h4>{title}</h4>
                <p>{content}</p>
                <p>{author}</p>
               </div>
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList;