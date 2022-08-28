import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import { Ucontext } from './Usercontext'

const Navbar = () => {
 
  let context3 = useContext(Ucontext);
  const setuniquepass = () =>{
        if(context3.secret_pass !== ''){
          context3.setroute('/CreateBlog');
        }
  }

  return (
    <>
      <div className='navbar'>
        <div>
           <Link to='/' className='head-logo'><h1>BLOG</h1></Link> 
        </div>
        <div className='nav-link'>
            <ul>
            <Link to='/SignUp'> <li><button>SignUp</button></li></Link>


            <Link to='/Login'><li><button>Login</button></li></Link>
            <Link to='/CreateBlog' > <li><button onClick={setuniquepass}>Create New Blog</button></li></Link>

             
           
            </ul>
        </div>
       </div>

     
    </>
  )
}

export default Navbar
