if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    return `<footer
      class="mesh__footer"
      style={defaultStyle}>
      <center>Footer</center>
    </footer>`;
}