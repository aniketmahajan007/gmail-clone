export default function Tab({Icon, title, tabcolor, selected}){
    return(
        <div className={`Tab ${selected && 'tab__selected'}`}
             style={{
                 borderBottom: `3px solid ${selected ? tabcolor : "white"}`,
                 color:`${selected && tabcolor}`,
                 background: `${selected && "whitesmoke"}`
             }}
        >
            <Icon/>
            <h4>{title}</h4>
        </div>
    )
}