import {Schema, model} from 'mongoose'

//define schema for a task
const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})
//define data model that going to use for this task schema
export default model('Task', taskSchema);
