import React from 'react';
import Data from './data.json';
import ReactLoading from 'react-loading';
import Hero from "./components/Hero";
import Section from './components/Section';
import Specialization from './components/Specialization';

import './assets/sass/App.scss';
import 'remixicon/fonts/remixicon.css'
import Experience from './components/Experience';
import Button from './components/Button';

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
          <div className='loading-wrapper'>
            <ReactLoading type={'cylon'} color={'#188ba5'} width={'25%'} />
          </div>
        </>
      )
    } else {
      return (
        <>
          <Hero title={this.state.hero.title} lead={this.state.hero.lead} />

          <Section title={this.state.about.title} isFull={false} alignment={'center'}>
            <p>{this.state.about.lead}</p>
          </Section>

          <Section title={this.state.specialization.title} isFull={false} alignment={'center'} extraCss={'bg-light'}>
            <Specialization items={this.state.specialization.items} />
            <div className='cta'>
              <Button href={'#contact'} type={'outline-main'}>Contact me</Button>
            </div>
          </Section>

          <Section title={this.state.career.title} isFull={false} alignment={'center'}>
            <p>{this.state.career.lead}</p>
            <Experience items={this.state.career.items} />
          </Section>
        </>
      )
    }
  }

  componentDidMount() {
    document.title = 'Rendy | a WordPress Developer'

    this.setState(
      Object.assign(Data, { isLoading: false })
    );
  }
}

export default App;
