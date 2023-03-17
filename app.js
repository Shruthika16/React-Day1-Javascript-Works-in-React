console.log("Message to Developer")
function AlertMsg(){
    const msg=()=>{alert("Message from Javascript Alert!")}
    return<div><button onClick={msg}>Click</button></div>
}
ReactDOM.render(<AlertMsg/>,document.getElementById('mydiv'))