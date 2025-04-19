import React, {useEffect,  useState} from 'react'
import Navbar from '../components/Navbar'
import Students from '../components/Students'

const Home = () => {

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json();
      setUsers(data);
      console.log(data);
    }
    fetchData();
  });



  return (
    <div>
      <Navbar />
      {/* use useEffect to fetch data from an API */}

      <div>
       
        {users.map((user) => (
          <p key={user.id}>{ user.email}</p>
          
        ))}
      </div>

      {/* useState */}
      
      <div>
        <input type="text" placeholder='type your name'
        onChange={(e)=>setName(e.target.value)}
        />

<input type="text" placeholder='type your age'
        onChange={(e)=>setAge(e.target.value)}
        />
        <p>
          Good morning {name} you are {age} years old
          
        </p>
        
      </div>

      <h1 className="text-9xl text-green-600">{count}</h1>
      <button onClick={()=>setCount(count + 1)} className="px-4 py-2 mt-4 bg-red-500">Plus 1</button>
     
       <button onClick={() => setIsOn(!isOn)} className={`px-4 py-2 transition-colors duration-300 ${isOn ? `bg-green-500`: `bg-red-700`}`}>{ isOn ? "it is on" : "it is off"}</button>
      <h1>Welcome to Softlife College</h1>
      <Students/>
    </div>
  )
}

export default Home
