var React = require('react');

var TabSelector = React.createClass({
  getInitialState: function() {
    return {selected: this.props.selected};
  },

  handleOnClick: function (evt) {
    this.setState({'selected': evt.target.getAttribute('data-value')})
  },

  render: function() {
    var tabs = this.props.data.map(function (item) {
      var selected = item.value == this.state.selected ? 'selected' : '';
      return (
        <li data-value={item.value}
          className={selected}
          onClick={this.handleOnClick}
        >{item.name}</li>
      );
    }, this);

    return (
      <div className="tab-selector">
        <label>{this.props.label}</label>
        <ul>
          {tabs}
        </ul>
      </div>
    );
  }
});

module.exports = TabSelector