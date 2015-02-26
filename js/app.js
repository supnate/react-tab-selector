'use strict';

require('../style.css');

var TabSelector = require('./TabSelector');
var React = require('react');

var data = [
  {name: 'Red', value: 'red'},
  {name: 'Blue', value: 'blue'},
  {name: 'Yellow', value: 'yellow'},
  {name: 'Green', value: 'green'},
  {name: 'White', value: 'White'}
];

var node = document.createElement('div');
document.body.appendChild(node);

React.render(
  TabSelector({label: 'Color', data: data, selected: null}), node
);