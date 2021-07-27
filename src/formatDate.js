function convertMonth(month){
    const arr = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return arr[month];
}

export default function formatDate(time){
    const timeformat = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const month = convertMonth(time.getMonth());
    return time.getDate()+" "+month+" "+timeformat;
}