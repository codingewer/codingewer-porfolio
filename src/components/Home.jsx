'use client';
import LetterByLetter from './LetterByLetter';

function Home() {
   
  return (
    <div className='home' >
      <div className="home-title-container">
        <LetterByLetter text="CODINGEWER" className="home-title" speed={200} wait={0}  />
        <LetterByLetter text="Preparing to enter the league of giants (AI)" className="home-subtitle" speed={50} wait={2100} />
      </div>
    </div>
  )
}

export default Home