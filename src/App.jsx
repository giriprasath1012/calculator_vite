import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [isuserlogin,setisuserlogin]=useState(false);
  const [Fname,setFname]=useState(" ");
  const [Lname,setLname]=useState(" ");
  const [firstno,setfirstno]=useState("");
  const [display,setdisplay]=useState("");
  const [symbol,setsymbol]=useState("");
  const [result,setresult]=useState("");

 

  function number(no)
  {
    setdisplay(display+no);
  }

  function clear()
  {
    setdisplay('');
    setresult('');
  }

  function operator(op)
  {
    setfirstno(display);
    setsymbol(op);
    setdisplay('');
  }

  function calculate()
  {
    if(symbol =='+')
    {

      setresult(parseInt(firstno) + parseInt(display));
      setfirstno("");
      setdisplay("");
      setsymbol('');
    }
    else if(symbol =='-')
    {
      setresult(parseInt(firstno) - parseInt(display));
      setfirstno("");
      setdisplay("");
      setsymbol('');

    }
    else if(symbol =='*')
    {
      setresult(parseInt(firstno) * parseInt(display));
      setfirstno("");
      setdisplay("");
      setsymbol('');
      
    }
    else if(symbol =='/')
    {
      setresult(parseInt(firstno) / parseInt(display));
      setfirstno("");
      setdisplay("");
      setsymbol('');
      
    }
    else
    {
      setresult(result);
      setdisplay(display);
    }

  }

  function login()
  {
    setisuserlogin(true);
  }

  function logout()
  {
    setisuserlogin(false);
  }



 
  return (

    
    <>
    {
      !isuserlogin ?
      (

        <div className='flex flex-col items-center justify-center'>
          <h1>Login</h1>
          <br></br>
          <br></br>
          <div className='box-border hover:p-10 bg-yellow-400 h-100 w-100 p-8 rounded-xl '>
            <form>
              <label className='font-semibold text-xl font-serif'>Enter your First Name : <input className=' font-medium text-xl font-serif' type="text" onChange={(e)=>setFname(e.target.value)}/>
              </label>
              <br></br>
              <br></br>

              <label className='font-semibold text-xl font-serif'>Enter your Last Name  :  <input className=' font-medium text-xl font-serif' type="text" onChange={(e)=>setLname(e.target.value)}/>
              </label>
            </form>
            <br></br>
            <br></br>


            <button className='rounded-xl px-20 py-2 text-lg font-semibold bg-gray-50 hover:bg-emerald-400 ml-28 ' onClick={login}>Login</button>

        
          </div>
          
            

          </div>
        
      ):
      (
       
        <div >
          <h1 className='text-center'>Welcome {Fname} {Lname}...</h1>
          <div className='h-fit  w-fit m-auto bg-black  rounded-xl'>
            <br></br>
            <div className=' grid bg-sky-300 h-36 rounded-xl m-2'>
              <div>
              <h1 className='ml-10 '>{display}</h1>
              </div>
             
              <div >
              <h1 className='ml-10 '>Result : {result}</h1>
              </div>
           
            

            </div>
            
          <div className=' grid  grid-cols-4 gap-4  bg-yellow-400  p-8 rounded-xl m-2 '>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('1')}>1</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('2')}>2</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('3')}>3</button> </div>

            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-stone-600' onClick={()=>operator('+')}>+</button> </div>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('4')}>4</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('5')}>5</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('6')}>6</button> </div>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-stone-600' onClick={()=>operator('-')}>-</button> </div>

            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('7')}>7</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('8')}>8</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('9')}>9</button> </div>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-stone-600' onClick={()=>operator('*')}>*</button> </div>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg hover:bg-white' onClick={()=>number('0')}>0</button> </div>

            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-sky-400' onClick={calculate}>=</button> </div>
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-sky-300' onClick={clear}>C</button> </div>
            
            <div>  <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white hover:bg-stone-600' onClick={()=>operator('/')}>/</button> </div>
          </div>
          <br></br>

          </div>
          <button className='font-semibold text-xl p-2 px-5 rounded-lg bg-black text-white ml-[635px] mt-2 hover:bg-sky-300' onClick={logout}> Logout</button>

        </div>

        
        
          
        
      )

      
    }

    
    </>
  
    
  );
  

  
}

export default App
