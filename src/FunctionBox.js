function FunctionBox(){
return(
    <>
        <div className="funcName" style={{width : '500px' ,border : "1px solid black"}}>
            <h1>This is created using functional component</h1>
            <p>This is done using external css</p>
            <p style={{color : 'blue'}}>This is done using internal css</p>
        </div>
    </>
)

}

export default FunctionBox;