import { useState } from "react"
import List from "todo_components/List"
import Input from "todo_components/Input"

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState<string[]>([])
  const onSubmit = () => {
    setTodos((prev) => [...prev, newTodo])
    setNewTodo("")
  }

  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  )
}

export default App
