const Header = require('../components/header');
const Logo = require('../components/logo');
const Menu = require('../components/menu');
const H1 = require('../components/h1');
const LangSelector = require('../components/lang-selector');
const Showcase = require('../components/showcase');
const Footer = require('../components/footer');

module.exports = [
  // web 1
  {
    children: [
      {
        component: Header,
        props: {
          rows: [
            {
              cols: [
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-2',
                    children: [
                      {
                        component: Logo,
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
                      {
                        component: Menu,
                        props: {
                          animation: 'prospero'
                        }
                      },
                    ]
                  }
                },
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-2',
                    children: [
                      {
                        component: H1,
                        props: {
                          h1Text: 'Title h1 of the web',
                          subtitle: 'Official Website',
                          imgSrc: 'http://www.hotelestequendama.com/static/corporativa/images/logo.svg',
                          imgWidth: 48,
                          imgHeight: 28
                        }
                      },
                    ]
                  }
                },
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-2',
                    children: [
                      { component: LangSelector },
                    ]
                  }
                },
              ]
            }
          ],
        },
      },

      {
        component: Showcase
      },

      {
        component: Footer
      }


    ]
  },

  // web 2
  {
    children: [
      {
        component: Header,
        props: {
          backgroundImg: 'http://www.modesathorn.com/cache/80/d2/80d2cb0d1f896478e968dfb29adf077e.jpg',
          style: ` .mesh__header {
            background: linear-gradient(to right,#00365d 0,#681f55 100%);
            height: 835px;
          }`,
          rows: [
            {
              cols: [
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-10',
                    children: [
                      {
                        component: H1,
                        props: {
                          h1Text: 'Title h1 of the web',
                          subtitle: 'Official Website',
                          faClass: 'fa-certificate',
                          style: `.mesh__h1 {
                            text-align: left;
                            margin-top: -10px;
                            color: #fff;
                            padding-left: 15px;
                            font-size: 10px;
                            background: linear-gradient(to right,rgba(255,255,255,.2) 0,rgba(255,255,255,0) 25%,rgba(255,255,255,0) 50%,rgba(255,255,255,.2) 200%);
                          }
                          .mesh__h1 .fa {
                            color: rgb(169, 145, 70);
                          }
                          .mesh__h1 * {
                            display: inline-block
                          }`,
                        }
                      },
                    ]
                  }
                },

                {
                  name: 'col',
                  props: {
                    _class: 'col-md-2',
                    children: [
                      { component: LangSelector }
                    ]
                  }
                }
              ]
            },

            {
              cols: [
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-12',
                    children: [
                      {
                        component: Logo,
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
              ]
            },
            {
              cols: [
                {
                  name: 'col',
                  props: {
                    _class: 'col-md-6  col-md-offset-2',
                    children: [
                      {
                        component: Menu,
                        props: {
                            style: `.mesh__menu li a {
                              padding: 10px 15px;
                              font-size: 12px;
                              font-family: Raleway,arial,sans-serif;
                              font-weight: 600;
                              font-style: normal;
                              -webkit-transition: all .3s ease-in-out;
                              transition: all .3s ease-in-out;
                              line-height: 20px;
                              display: block;
                              text-transform: uppercase;
                            };

                            .mesh__menu menu__list {
                                -webkit-margin-before: 0;
                                -webkit-margin-after: 0;
                                -webkit-margin-start: 0;
                                -webkit-margin-end: 0;
                                -webkit-padding-start: 0;
                                width: 100%;
                                margin: 0 auto;
                                text-align: center;
                                display: inline-block;
                                float: none;
                                vertical-align: top;
                            }

                            .mesh__menu .menu__link {
                              color: #ffffff;
                            }
                            .mesh__menu .menu__item--current .menu__link {
                              color: #a99146;
                            }

                            .mesh__menu .menu__item::before,  .mesh__menu .menu__item::after {
                              background: #a99146;
                            }

                            `,
                            animation: 'cordelia'
                          }
                      },
                    ]
                  }
                }
              ]
            }
          ],
        },
      },

    ]
  }
];
