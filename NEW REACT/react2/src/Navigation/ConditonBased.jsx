import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConditonBased = () => {
    const navigate = useNavigate()
    const handlenext = (a) =>{
        switch(a){
            case "admin":
                navigate("/admin");
                break
            case "user":
                    navigate("/user")
                    break
                    navigate
        }
    }
  return (
    <div>
      <button onClick={() =>handleNext("/admin")}>Admin</button>
      <button onClick={() =>handleNext("/user")}>User</button>
      <button onClick={() =>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ConditonBased
