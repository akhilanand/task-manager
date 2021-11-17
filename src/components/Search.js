import Task from './SearchItem'

const Search = ({ tasks }) => {
    return (
        <>
          {
              tasks.map((task) => (
                  <Task key={task.id} task={task} />
              ))
          }  
        </>
    )
}

export default Search
