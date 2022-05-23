import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
export default App
