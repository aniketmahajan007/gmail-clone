
export default function LeftItems({Icon, text, total, selected}){
    return(
        <div className={`LeftItems ${selected && "leftitem-active"}`}>
            <Icon className="LeftItems__icon" />
            <span className="LeftItems__text">{text}</span>
            {total>0 && <span className="LeftItems__total">{total}</span>}
        </div>
    )
}