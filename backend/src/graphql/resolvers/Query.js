import Task from '../../models/Task'

const Query = {
  greet(){
    return 'Hello Word'
  },
  
  task: async () => {
    return await Task.find()
  }
}

export default Query;