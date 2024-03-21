import React from 'react'
import FBbutton from './FBbutton'
import { FaMessage } from "react-icons/fa6";
import LinkWithLabel from './LinkWithLabel';


const Form = () => {
  return (
    <div className='mt-6 lg:mt-0 pt-10 lg:pt-0'>
      <FaMessage className='h-60 w-60 fill-green-600' />
      <div className='relative -top-40'>
        <FBbutton/>
      </div>
      {/* <div className='border p-4 rounded-md bg-white shadow-lg'>
        <LinkWithLabel  
          LinkName={"Sign In"}
          To={"/sign-in"}
          Label={"Already a Customer?"}
        />
      </div> */}
    </div>
  )
}

export default Form