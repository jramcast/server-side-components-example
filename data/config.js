module.exports = [
  // web 1
  {
    children: [
      {
        name: 'header',
        props: {
          children: [
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  {
                    name: 'logo',
                    props: {
                      url: 'http://www.hotelestequendama.com/static/corporativa/images/logo.svg',
                      link: '/',
                      height: 63,
                      width: 131,
                    }
                  },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-6',
                children: [
                  { name: 'menu' },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  { name: 'h1' },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  { name: 'lang-selector' },
                ]
              }
            },
          ],
        },
      },

    ]
  },

  // web 2
  {
    children: [
      {
        name: 'header',
        props: {
          children: [
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  {
                    name: 'logo',
                    props: {
                      url: 'http://www.modesathorn.com/static/modesathornhotel/images/logo.png',
                      link: null,
                      height: '',
                      width: '',
                      style: `.mesh__logo { position: relative;
                          text-align: center;
                          z-index: 5;
                          width: 100%;
                          margin-top: 0;
                          display: inline-block;
                          background: none;
                        }

                        .mesh__logo img {
                          margin: 0px auto 0;
                        }`,
                    }
                  },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-6',
                children: [
                  { name: 'menu' },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  { name: 'h1' },
                ]
              }
            },
            {
              name: 'col',
              props: {
                _class: 'col-md-2',
                children: [
                  { name: 'lang-selector' },
                ]
              }
            },
          ],
        },
      },

    ]
  }
];


















  