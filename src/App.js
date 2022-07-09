import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Card'
import photo from './images/enj.jpg'
import data from './Components/data'
// import Joke from './Components/Joke'
// import Jokeset from './Components/Jokeset'
// const Jokelements = Joke.map((joke) => {
//   return <Jokeset setup={joke.setup} punchline={joke.punchline} />
// })
const Cardodat = data.map((dat) => {
  return (
    <Cards
      key={dat.id}
      img={photo}
      title={dat.title}
      openSpots={dat.openSpots}
      price={dat.price}
      rating={dat.stats.rating}
      reviewCount={dat.stats.reviewCount}
    />
  )
})
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="Car">{Cardodat}</div>
      {/* {Jokelements} */}
    </div>
  )
}

export default App
