
import './App.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'
function App() {          
  //js code 
  // state to store data from input fields 
 const [principle,setPrinciple] = useState(0)
 const [rate,setRate] = useState(0)
 const [year,setYear] = useState(0)
//  state for calculate interest
const [interest,setInterest] = useState(0)
//  conditional rendering for principle ,rate,year
const [isPrinciple,setIsPrinciple] = useState(true)
const [isRate,setIsRate] = useState(true)
const [isYear,setIsYear] = useState(true)

// validation
const validate =(e)=>{
//  destructring
        const {name,value} = e.target 
        console.log(name);
        console.log(value);

        // reg expr = /^[0-9]*$/       
        /* match() - check the pattern match the value return array
         if the  value matches otherwise returns null*/

          // console.log(value.match( /^[0-9]*$/));
          // !! - to convert into boolean

          if(!! value.match( /^[0-9]*$/)){
            if(name==='principle'){
              setPrinciple(value)
              setIsPrinciple(true)
            }else if(name === 'rate'){
              setRate(value)
              setIsRate(true)
            }else{
              setYear(value)
              setIsYear(true) 
            }

          }else{
            if(name==='principle'){

              setPrinciple(value)
              setIsPrinciple(false)

            }else if(name ==='rate')
            {
              setRate(value)
              setIsRate(false)
            }
           
            else{
              setYear(value)
              setIsYear(false)
            }

          }
}
const handleReset  = ()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}
const  handleCalculate =(e)=>{
     e.preventDefault()
     setInterest((principle*rate*year/100))

}
 


  return (
    <>
     <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>simple interest</h1>
        <p>calulate your simple interest easily</p>
          <div style={{height:'150px'}} className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
            <h1>Rs:{interest}</h1>
            <p>total simple interest</p>
          </div>
          <form onSubmit={handleCalculate}>
          <div className='mb-3 mt-5'>
             <TextField id="outlined-basic" name='principle' value={principle || ""} onChange={(e)=>validate(e)} label="principle amount" variant="outlined" className='w-100' />

            {
             !isPrinciple &&
             <p className='text-danger'>*invalid input</p>
             }
          </div>

          <div className="mb-3 ">
          <TextField id="outlined-basic"  name='rate' value={rate || ""}  onChange={(e)=>validate(e)} label="rate of interest" variant="outlined"className='w-100'  />

          { 
          !isRate && <p  className='text-danger'>*invalid input</p>
          }
          </div>

          <div className="mb-3 ">
          <TextField id="outlined-basic"  name='year'value={year || ""}  onChange={(e)=>validate(e)} label="year (yr)" variant="outlined"className='w-100'  />

          { 
          !isYear && <p  className='text-danger'>*invalid input</p>
          }
          </div>

           <div className='mb-3 d-flex justify-content-between'>
           <Button type='submit' variant="contained" color="success" style={{height:'60px',width:'190px'}} disabled={isPrinciple && isRate && isYear?false:true} >Calculate</Button>
           <Button onClick={handleReset} variant="outlined" style={{height:'60px',width:'190px'}}>Reset</Button>
           </div>
          </form>
      </div>
     </div>
    </>
  )
}

export default App
