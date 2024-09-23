'use client';
import Hero from '../components/hero/Hero';

export default function Index() {
  return (
    
  <div>
      <Hero 
        title="Voyage Vista" 
        subtitle="A new way to travel" 
        isButtonVisible={true}
        buttonText="Log in"
        buttonLink="/login"
        />
    </div>

  );
}
