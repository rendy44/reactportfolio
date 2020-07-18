import React from 'react';
import ReactLoading from 'react-loading';
import Hero from "./components/Hero";
import Section from './components/Section';
import Specialization from './components/Specialization';
import SpecializationItem from './components/Specialization/SpecializationItem';

import './assets/sass/App.scss';
import 'remixicon/fonts/remixicon.css'

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
          <Section title={'My Specialization'} isFull={false} alignment={'center'} extraCss={'bg-light'}>
            <Specialization>
              <SpecializationItem title={'WPCS Compliance'} description={'By following WPCS we can expect most of what WordPress can offers.'} icon={'list-check-2'} />
              <SpecializationItem title={'Customizable'} description={'By utilizing WordPress hooks, we can ease our development process.'} icon={'user-settings-line'} />
              <SpecializationItem title={'Secure'} description={'Beautiful and cutting-edge website is worth nothing if it is not secure.'} icon={'lock-2-line'} />
            </Specialization>
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
