export default {
  nav: {
    logo: 'Ali Robertson',
    links: [
      { text: 'Projects', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + './assets/edit2.png',
    text: ['Hello!', "My name is Ali.", 'I am a '],
    typical: [
      'full stack web developer. 💻',
      2000,
      'UI/UX enthusiast. 🎨',
      2000,
      'mobile designer. 📲',
      2000,
    ],
    btnText: 'View My work',
  },
  work: {
    title: 'Projects',
    img: process.env.PUBLIC_URL + './assets/CCimage.jpg',
    projectName: 'Client-Catalogue',
    desc:
      'Client-Catalogue provides a virtual organization for your business. You may add, update and charge fees to your clientelle. Update the TODAY page to provide each days scheduled clients. This page also provides a to-do list to add and delete tasks to complete. Use the MESSAGE page tocommunicate with everyone saved in your catalogue.',
  },
  work2: {
    title: 'Projects',
    img: process.env.PUBLIC_URL + './assets/Aimage.jpg',
    projectName: 'Aesthetica',
    desc:
      'Aesthetica is a user friendly and interactive app that provides a virtual window shopping experience. Users can build a unique profile secured with a username and password. We tackle the hassle of filtering products based on user’s shopping preferences which can then be pinned to their unique page and commented on.',
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `MERN is currently my preference. I am a quick learner and excited to learn more in the future`,
  },
  contact: {
    title: 'Contact Me!',
    desc: 'Resume provided upon request.',
    img: process.env.PUBLIC_URL + './assets/edit2.png',
  },
};
