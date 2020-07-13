import React from 'react';
import ReactLoading from 'react-loading';
import './assets/sass/App.scss';
import Hero from "./components/Hero";
import Section from './components/Section';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <ReactLoading type={'cylon'} color={'#188ba5'} width={'50%'} />
        </>
      )
    } else {
      return (
        <>
          <Hero />
          <Section />
        </>
      )
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000)
  }
}

// function App() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }

export default App;
