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
          <Section title={'Hi There!'} isFull={false} alignment={'center'}>
            <p>I am a WordPress Developer based in Yogyakarta, Indonesia. I am passionate to write clean and efficient code but highly customizable.</p>
          </Section>
        </>
      )
    }
  }

  componentDidMount() {
    document.title = 'Rendy | a WordPress Developer'

    this.setState({
      isLoading: false
    });
  }
}

export default App;
