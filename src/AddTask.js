import { useState } from "react"

export const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please add a task!')
            return
        }

        onAdd({ name })
        setName('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type="text" placeholder="Add Task" onChange={(e) => setName(e.target.value) }  value={name}/>
            </div>
            <div className='form-control'>
                <input type="submit" className='btn' value="Save Task" />
            </div>
        </form>
    )
}
