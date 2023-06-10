import { useState } from "react"


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
        console.log(json.error)
    }
    if (response.ok) {
      console.log("success")
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1 className="text-5xl font-extrabold text-red-500">
          Signup
        </h1>
        <input type="email" className="p-4 text-white bg-red-500" onChange={(e) => setEmail(e.target.value)}  placeholder="Email">

        </input>
        <input type="password" className="p-4 text-white bg-red-500" onChange={(e) => setPassword(e.target.value)}  placeholder="Password">

        </input>
        <button className="p-4 text-white bg-red-500">Submit</button>
      </form>
    </div>
  )
}

export default App
