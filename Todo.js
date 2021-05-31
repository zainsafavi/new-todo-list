import react, {useState} from "react";
import { Button, TextField, makeStyles } from '@material-ui/core';

function Todo () {

    const [tasks, setTasks] = useState([]);

    const [notes, setNotes] = useState([]);

    const [tasksExist, setTasksExist] = useState(false);

    const [completed, setCompleted] = useState(false);

    let taskarray = [];

    let notearray = [];

    function handleChange(e) {
      e.preventDefault();
      console.log("handling change")

    }

    function addTask (e) {
      setTasksExist(true);

      e.preventDefault();

      console.log("adding task");

      taskarray.push(
        {
        ID: Math.random * 100,
        taskName: e.target.value,
        progress: completed
      }
      
      );
      console.log(e);
      
      console.log(e.target.value);

      setTasks(taskarray);
    }

    /* function removeTask(e) {

       find task in array using a contains method; I need to add ID's to each task object to do this,
       either make a new array without the task and put that array in, or use a JS function to 
       delete it from the array



     } */

     /* function editTask (e) {
      no remote idea on how to do this, but the obvious idea is to click a button on the 
      list item that allows for editing the text

     }

     /* function markCompleted (e) {

      **have tasks initially start as unfinished and until their checkbox is selected, remain unfinished
      ^ might be a very poorly thought out idea

      need a state for [completed,setCompleted] I think, change the state of the 
      task object in this function, and add it to a completed tasks array

       }*/

      /*function displayCompleted (e) {
        for tasks with their states set to completed, add them to a completed tasks array,
        map through it and display each as an <li> when a button is pressed to show completed tasks

      }
       */

       /*function displayUnompleted (e) {
        same as displayCompleted except mapping through an unfinished tasks array 
        
      }
       */

     //basically going to give notes the same functionality minus markCompleted, displayCompleted, and displayUncompleted

    const listTasks = tasks.map((task,i) => {return( <li key = {i}>  Task: {task.taskName} </li> )}) 

    //const listNotes = notes.forEach((note) => <li> Note: {note} </li>) 

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));

    const classes = useStyles();

    
//textfield needs to take the input and make that into a task or note
//buttons that add notes + tasks, edits notes + tasks, deletes notes + tasks, and can mark tasks completed
//notes and tasks need to have a check box 

//noValidate autoComplete="off"
    return (
        <>

        <h1> to do list </h1>

          <form className={classes.root} >
     
            <TextField id="filled-basic" label="Add a task" variant="filled" onChange = {(e) => handleChange(e)}/>
            <input type="submit" label= "add task" onClick = {(e) => addTask(e)}/>
      
            </form>

            {/* <form className={classes.root} noValidate autoComplete="off"
          onSubmit = {handleNote}>
     
            <TextField id="filled-basic" label="Add a note" variant="filled" />
      
            </form> */}

            <> {tasksExist ? <> {listTasks} </> : <p> no tasks yet </p> } </>

            <> </>


            {/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form> */}

        </>
    )

}

export default Todo