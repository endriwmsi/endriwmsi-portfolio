import { Github, Instagram, Linkedin } from 'lucide-react';

export const biographyData = {
  intro: 'Hello! I’m Endriw Schiavenato.',
  description: `A 21-year-old Systems Analysis and Development student with front-end experience.
  Passionate about learning and ready to contribute to innovative projects.`,
}

export const decoratorsData = [
  { id: 1, text: 'Age', value: '21' },
  { id: 2, text: 'Residence', value: 'BRA' },
  { id: 3, text: 'Freela', value: 'Available' },
  { id: 4, text: 'Address', value: 'Santa Catarina, BRA' }
];

export const socialLinks = [
  { id: 1, href: 'http://www.instagram.com/endriwmsi_', Icon: Instagram },
  { id: 2, href: 'http://www.linkedin.com/in/endriwmsi', Icon: Linkedin },
  { id: 3, href: 'http://www.github.com/endriwmsi', Icon: Github }
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
    description: "Formatting and maintaining hardware and software, installing network cables, related configurations, and software installations."
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