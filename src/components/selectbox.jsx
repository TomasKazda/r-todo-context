
const SelectBox = ({options = [{"name": "empty", "value": "0"}], setSelected = ()=>{} }) => {
    const selectdata = options.map((item, key) => <option key={key} value={item.value}>{item.name}</option>)
    setSelected(options[0].value);
    return <select onChange={(e)=>{setSelected(e.currentTarget.value)}}>
        {selectdata}
    </select>
}

export default SelectBox;