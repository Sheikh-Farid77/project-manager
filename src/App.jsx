import Aside from "./Aside"
import Header from "./Header"
import Board from "./Board"


function App() {
  

  return (
    <>
  <div className="flex h-screen">
    <Aside />
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <Header />
      <Board />

    </main>

  </div>
    </>
  )
}

export default App
