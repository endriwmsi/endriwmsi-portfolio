import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
 return (
  <TypeAnimation
    sequence={[
      'Software Developer',
      2000, // wait 1s before replacing "Mice" with "Hamsters"
      'And coffee lover',
      2000,
      '💕 Valéria',
      2000,
    ]}
    wrapper="span"
    speed={10}
    style={{ fontFamily: 'Syne', fontSize: '16px', display: 'inline-block' }}
    repeat={Infinity}
  />
 )
}

export default TypingAnimation;