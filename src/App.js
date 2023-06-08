import React, { Component } from 'react';
import "./App.css";
import Card from "./Card";
import { LoremIpsum } from 'lorem-ipsum';

class App extends Component {
  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 1
    },
    wordsPerSentence: {
      max: 8,
      min: 4
    }
  });
  state = {
    person: {
      fullName: this.lorem.generateParagraphs(1),
      bio: this.lorem.generateParagraphs(1),
      imgSrc: "/pexels-photo-4925867.jpeg",
      profession: this.lorem.generateParagraphs(1),
    },
    person1: {
      fullName: this.lorem.generateParagraphs(1),
      bio: this.lorem.generateParagraphs(1),
      imgSrc: "/pexels-photo-4925867.jpeg",
      profession: this.lorem.generateParagraphs(1),
    },
    shows: true,
  };

  render() {
    const { person, shows } = this.state;

    return (
      <>
        {shows && (
          <Card
            src={person.imgSrc}
            title={person.fullName}
            bio={person.bio}
            profession={person.profession}
         
          />
          
        )}
        {shows && (
          <Card
            src={person.imgSrc}
            title={person.fullName}
            bio={person.bio}
            profession={person.profession}
         
          />
          
        )}
        
      </>
    );
  }
}

export default App;
