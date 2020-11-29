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
    <div className="card-columns">
      <div className="">
        {
          data.task.map(({_id, title, content, author}) => (
              <div key={_id} className="card m-3" style={{maxWidth: '18rem'}}>
               <form onSubmit={
                 async e => {
                   e.preventDefault();
                    await removeTask({variables: {_id}})
                    window.location.href="/" //we can use the router too
                  }
                } >
                  <button className="btn btn-danger float-right btn-sm mt-1 mr-1" data-dismiss="modal">Remove</button>
                </form>
              <div className="card-header">{title}</div>
              <div className="card-body">
                <p className="card-text">{content}</p>
                <p class="card-text text-right">
                  <small class="text-muted">
                    {author}
                  </small>
                </p>
              </div>
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskList;