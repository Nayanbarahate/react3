import React,{useState} from "react";
import './Class.css'


const Form =()=>{
    const [useRegistration , setuserRegistration] = useState({
        name:"",
        department:"",
        rating:"",

    });
    const [next,setNext]=useState(false);
    const [Records,setRecords] = useState([])
    const handleInput=(e)=>{
        const name =e.target.name;
        const value =e.target.value;
        console.log(name,value);
        setuserRegistration({...useRegistration,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newRecord={...useRegistration,id:new Date().getTime().toString()}
        console.log(Records);
        setRecords([...Records,newRecord])
        console.log(Records);
        setuserRegistration({name:" ",department:" ",rating:" "});
        setNext(true)
    }
    const back=()=>{
        setNext(false)
    }
    return(
        <center>
        <div className="body">
       
            <div >
                {next?null:
                <form action="" onSubmit={handleSubmit} >
                    <h1>EMPLOYEE FEEDBACK FORM</h1> <br></br>
                   
                    <label className="top" htmlFor="name" >Name :</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={useRegistration.name} onChange={handleInput} /><br></br>
                    <br></br>
                    <label className="top" htmlFor="department" >Department :</label>
                    <input type="text" name="department" id="department" value={useRegistration.department} onChange={handleInput}  /><br></br>
                    <br></br>
                    <label className="top" htmlFor="rating" >Rating :</label>
                    <input type="number" name="rating" id="rating"  value={useRegistration.rating} onChange={handleInput} /><br></br>
                    <br></br>
                    <button id="submit">Submit</button>

                </form>
                
                }
            </div>
           
            {next ?
            <div>
            <h1> EMPLOYEE FEEDBACK FORM </h1>
            <div className="parent">
            
                {
                    Records.map((curreElem)=>{
                        const{id,name,department,rating}=curreElem
                        return(
                            <div
                                key ={id} className='child'>
                                Name:{name} || Department:{department} || Rating: {rating}
                            </div>
                        )}
                    )}
                    <br></br>
                    <br></br>
            </div>
            {next?<input id="submit" onClick={back} type="button" value="Go Back" />:null}
        </div>:null}
        </div>
        </center>
    )
}

export default Form;