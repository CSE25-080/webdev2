import React from 'react'

function StudentReg() {
    const[data,SetData]=useState({name:'',tel:'',email:'',});
    const handekChange=(e)=>{
        setData{{ ...data,[e.target.name]: [e.target.value] }};

    };
    const handleStudent=(e)=>{
        
    }
  return (
        <div>
        <form>
    <input
    type="text"
    name="name"
    value="sand"
    placeholder="enter name"
    />
    <input/>
</form>
    </div>
  
  )
}

export default StudentReg