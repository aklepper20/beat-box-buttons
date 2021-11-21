import { useState } from 'react';
import {Howl, Howler} from 'howler';
import styled from 'styled-components';
import './App.css';
import Bass from './audioclips/bassHit.wav';
import Snare from './audioclips/snareHit.wav';
import Guitar from './audioclips/guitarStrum.wav';
import HighHat from './audioclips/HighHat.wav';
import Harmonica from './audioclips/harmonica.wav';
import Acoustic from './audioclips/accoustic.wav';
import Brass from './audioclips/brass.mp3';
import Chime from './audioclips/chime.wav';
import Trumpet from './audioclips/trumpetsad.mp3';

function App() {
  const [display, setDisplay] = useState('Hit Any Key for a Beat');
  const [currentKey, setCurrentKey] = useState('');

  const audioClips = [
    { src: Bass, label: 'BASS HIT', key: 'Q' },
    { src: Snare, label: 'SNARE HIT', key: 'W' },
    { src: Guitar, label: 'GUITAR', key: 'E' },
    { src: HighHat, label: 'HIGH HAT', key: 'A' },
    { src: Harmonica, label: 'HARMONICA', key: 'S' },
    { src: Acoustic, label: 'ACOUSTIC GUITAR', key: 'D' },
    { src: Brass, label: 'BRASS', key: 'Z' },
    { src: Chime, label: 'CHIME', key: 'X' },
    { src: Trumpet, label: 'TRUMPET', key: 'C' }
  ];

const playSound = (audioSrc, audioDisplay, audioKey) => {
  setCurrentKey(audioKey);
  setDisplay(audioDisplay);

  const sound = new Howl({
    src: [audioSrc]
  });
  sound.play();
}

  return (
    <Container>
      <Main>
        <Display>{display}</Display>
        <ButtonsContainer>
          { audioClips.map((audioObj) => {
            let audioKey = audioObj.key;
            let audioDisplay = audioObj.label;
            let audioSrc = audioObj.src;
            let selected = audioKey == currentKey ? true : false;

            return <Button
              selected={selected}
              onClick={() => playSound(audioSrc, audioDisplay, audioKey)}
              >
                {audioKey}
              </Button>
          }) }
        </ButtonsContainer>
      </Main>
    </Container>
  )
};

export default App

const Container = styled.div`
  background-color: #b998b3;
  width: 100wh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  width: 375px;
  height: 500px;
  box-shadow:  27px 27px 52px #92788d, -27px -27px 52px #e0b8d9;
  background: linear-gradient(145deg, #a789a1, #c6a3c0);
  border-radius: 21px;
`
const Display = styled.div`
font-size: 26px;
font-weight: 600;
border-radius: 21px;
background: linear-gradient(145deg, #a789a1, #c6a3c0);
box-top-shadow:  26px 26px 70px #90778c,
                 -26px -26px 70px #e2b9da;
  height: 25%;
  border-top-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonsContainer = styled.div`
  height: 75%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Button = styled.div`
  color: white;
  font-weight: 400;
  font-size: 20px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  border-radius: 18px;
  box-shadow:  7px 7px 34px #8b7286,
              -7px -7px 34px #e7bee0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => selected ? '#d0b9cc' : '#b998b3'};
  transition: 0.2s all ease-out;
   &:hover {
    background-color: #d0b9cc;
  }
`
