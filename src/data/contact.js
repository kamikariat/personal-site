import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:tony.shek.kam@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/tonyshekkam/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/kamikariat',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://twitter.com/kamikariat',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://www.instagram.com/kamikariat',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://t.me/kamikariat',
    label: 'Telegram',
    icon: faTelegram,
  },
];

export default data;
