import React,{useState,createContext} from 'react';
export const Ucontext=createContext();
const Usercontext = (props) => {
    const [userdetails,setuserdetails]=useState([]);
    const [readdata , setReaddata] = useState([]);
    const [card_data,setCard_data] = useState([]);
    const [secret_pass,setSecretPass] = useState('')
   
  return (
    <>
    <Ucontext.Provider value={{userdetails,setuserdetails,readdata,setReaddata,card_data,setCard_data,secret_pass,setSecretPass}}>
        {props.children}
    </Ucontext.Provider>
    </>
  )
}
export default Usercontext;
