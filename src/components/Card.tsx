import { CloudDownloadIcon, SendIcon } from 'lucide-react';
import ActionButton from './ActionButton';
import TypingAnimation from './TypingAnimation';
import endPhoto from '../assets/img/endriw.jpg';
import { socialLinks } from '../lib/constants';

const Card = () => (
  <div className="md:perspective-1000 w-full h-full max-w-[531px] max-h-[710px]">
    <div
      className='rotate-y-6 bg-cover bg-center h-[620px] md:h-full flex flex-col justify-end items-center'
      style={{ backgroundImage: `url(${endPhoto})` }}
    >
      <div className='flex flex-col items-center mb-12'>
        <h1 className='text-lg md:text-3xl font-bold'>Endriw Schiavenato</h1>
        <span className='text-lime-400'>
          <TypingAnimation />
        </span>

        <div className='flex items-center gap-3 mt-5'>
          {socialLinks.map((social) => (
            <a key={social.id} href={social.href} target='_blank' rel='noreferrer'>
              <social.Icon className='hover:text-lime-400 hover:-translate-y-1 transition-all' />
            </a>
          ))}
        </div>
      </div>

      <div className='w-full flex'>
        <ActionButton icon={<CloudDownloadIcon />} actionTitle="DOWNLOAD CV" action={() => {}} />
        <ActionButton icon={<SendIcon />} actionTitle="CONTACT ME" action={() => {}} />
      </div>
    </div>
  </div>
);

export default Card;
