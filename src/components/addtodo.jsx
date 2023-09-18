import { useState } from 'react'
import SelectBox from "./selectbox";

const AddTodo = () => {
    const [priority, setPriority] = useState(99)
    return <>
    debub_priority: {priority}
        <input type='date'/>
        <SelectBox options={[{"name": "low", "value": "1"},
                             {"name": "medium", "value": "2"},
                             {"name": "high", "value": "3"},
                             {"name": "ultra", "value": "4"}]} 
                   setSelected={(newValue)=>setPriority(newValue)} />
        <input placeholder='item type' /><button>add part</button>
        <button>place todo</button>
    </>
}

export default AddTodo;