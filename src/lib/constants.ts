import { Github, Instagram, Linkedin } from 'lucide-react';

export const biographyData = {
  intro: 'Hello! I’m Endriw Schiavenato.',
  description: `A 21-year-old Systems Analysis and Development student with front-end experience.
  Passionate about learning and ready to contribute to innovative projects.`,
}

export const decoratorsData = [
  { text: 'Age', value: '21' },
  { text: 'Residence', value: 'BRA' },
  { text: 'Freela', value: 'Available' },
  { text: 'Address', value: 'Santa Catarina, BRA' }
];

export const socialLinks = [
  { href: 'http://www.instagram.com/endriwmsi_', Icon: Instagram },
  { href: 'http://www.linkedin.com/in/endriwmsi', Icon: Linkedin },
  { href: 'http://www.github.com/endriwmsi', Icon: Github }
];

export const timelineExp = [
  { 
    time: '2023 - 2024', 
    application: 'FULL-STACK Vue & Laravel Developer', 
    place: 'LDX Capital LTDA.', 
    description: `Redesigned interfaces, built a financial dashboard, integrated investment 
    portfolio imports from XP Investimentos, and developed interactive charts for better decision-making.`
  },
  { 
    time: '2022 - 2023', 
    application: 'T.I Assistant', 
    place: 'Farol Informática', 
    description: `Formatting and maintaining hardware and software, installing network cables, related configurations, and software installations.`
  },
]

export const timelineEdu = [
  { 
    time: '2022 - 2024', 
    application: 'Systems Analysis and Development', 
    place: 'Lutheran University of Brazil', 
    description: `I developed a platform to streamline issuing complementary hour certificates, 
    integrating email tools, QR code generation, and validation with NestJS and ReactJS.`
  },
  { 
    time: '2019 - 2021', 
    application: 'High School', 
    place: 'E.E.M.Gov. Ildo Meneghetti', 
    description: 'School in Passo de Torres, Santa Catarina.'
  },
]