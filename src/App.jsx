import './App.css'
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Posts></Posts>
      </main>
    </>
  )
}

export default App
