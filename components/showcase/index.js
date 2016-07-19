if (process.env.BROWSER) require('./style.less');

module.exports = (props = {}) => {
    const {hello} = props;
    return `<section class="mesh__showcase" onClick={this.handleClick}>
      <div id="large-section" class="large-section">
        <h1 class="main-title">Showcase</h1>
      </div>
    </section>`;
}