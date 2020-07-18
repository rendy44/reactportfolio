import React from 'react';
import Data from './data.json';
import ReactLoading from 'react-loading';
import Hero from "./components/Hero";
import Section from './components/Section';
import Specialization from './components/Specialization';
import Experience from './components/Experience';
import Button from './components/Button';
import Footer from './components/Footer';
import './assets/sass/App.scss';
import 'remixicon/fonts/remixicon.css'
import Contact from './components/Contact';

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

          <Section id={'about'} title={this.state.about.title} isFull={false} alignment={'center'}>
            <p>{this.state.about.lead}</p>
          </Section>

          <Section id={'specialization'} title={this.state.specialization.title} isFull={false} alignment={'center'} extraCss={'bg-light'}>
            <Specialization items={this.state.specialization.items} />
            <div className='cta'>
              <Button href={'#contact'} type={'outline-main'}>Contact me</Button>
            </div>
          </Section>

          <Section id={'experiences'} title={this.state.career.title} isFull={false} alignment={'center'}>
            <p>{this.state.career.lead}</p>
            <Experience items={this.state.career.items} />
          </Section>

          <Section id={'contact'} title={this.state.contact.title} isFull={false} alignment={'center'}>
            <p>{this.state.contact.lead}</p>
            <Contact items={this.state.contact.items} />
          </Section>

          <Footer>
            <p>&copy; 2020 {this.state.general.title} | {this.state.general.desc}</p>
          </Footer>
        </>
      )
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        Object.assign(Data, { isLoading: false })
      );
    }, 750)

    const { title, desc } = Data.general;
    document.title = title + " | " + desc;
  }
}

export default App;
