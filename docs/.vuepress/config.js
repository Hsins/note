module.exports = {
  title: 'Udemy Notes',
  description:
    'The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.',
  base: '/Udemy-Notes/',
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] }
  },
  themeConfig: {
    docsDir: 'docs',
    sidebar: 'auto',
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    editLinkText: 'Edit this page',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Programming Languages',
        items: [
          {
            text: 'C++ Tutorial for Complete Beginners',
            link: '/C++%20Tutorial%20for%20Complete%20Beginners/'
          },
          {
            text: 'Learn Advanced C++ Programming',
            link: '/Learn%20Advanced%20C++%20Programming/'
          },
          {
            text: 'Java Programming Masterclass for Software Developers',
            link:
              '/Java%20Programming%20Masterclass%20for%20Software%20Developers/'
          },
          {
            text: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
            link:
              '/Complete%20Python%20Bootcamp,%20Go%20from%20zero%20to%20hero%20in%20Python%203/'
          },
          {
            text: "ES6 Javascript: The Complete Developer's Guide",
            link: "/ES6%20Javascript,%20The%20Complete%20Developer's%20Guide/"
          },
          {
            text: 'JavaScript: Understanding the Weird Parts',
            link: '/JavaScript,%20Understanding%20the%20Weird%20Parts/'
          },
          {
            text: "Go, The Complete Developer's Guide",
            link: "/Go,%20The%20Complete%20Developer's%20Guide/"
          }
        ]
      },
      {
        text: 'Web Development',
        items: [
          {
            text: 'Git a Web Developer Job: Mastering the Modern Workflow',
            link:
              '/Git%20a%20Web%20Developer%20Job%20Mastering%20the%20Modern%20Workflow/'
          },
          {
            text: 'The Complete Web Developer Course 2.0',
            link: '/The%20Complete%20Web%20Developer%20Course%202.0/'
          },
          {
            text: 'The Web Developer Bootcamp',
            link: '/The%20Web%20Developer%20Bootcamp/'
          },
          {
            text: 'The Advanced Web Developer Bootcamp',
            link: '/The%20Advanced%20Web%20Developer%20Bootcamp/'
          },
          {
            text: 'Modern React with Redux',
            link: '/Modern%20React%20with%20Redux/'
          },
          {
            text: 'Node with React: Fullstack Web Development',
            link: '/Node%20with%20React,%20Fullstack%20Web%20Development/'
          },
          {
            text: 'The Complete React Web Developer Course (with Redux)',
            link:
              '/The%20Complete%20React%20Web%20Developer%20Course%20(with%20Redux)/'
          }
        ]
      },
      {
        text: 'Databases',
        items: [
          {
            text: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
            link:
              '/The%20Ultimate%20MySQL%20Bootcamp,%20Go%20from%20SQL%20Beginner%20to%20Expert/'
          }
        ]
      },
      {
        text: 'Music',
        items: [
          {
            text: 'Pianoforall - Incredible New Way To Learn Piano & Keyboard',
            link: '/'
          }
        ]
      },
      {
        text: 'Photography',
        items: [
          {
            text: 'Photography Masterclass: A Complete Guide to Photography',
            link:
              '/Photography%20Masterclass,%20A%20Complete%20Guide%20to%20Photography/'
          },
          {
            text: 'Night Photography: You Can Shoot Stunning Night Photos',
            link:
              '/Night%20Photography,%20You%20Can%20Shoot%20Stunning%20Night%20Photos/'
          }
        ]
      }
    ]
  }
};
