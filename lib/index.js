
var classes = require('classes')
  , domify = require('domify')
  , Emitter = require('emitter')
  , events = require('events')
  , prevent = require('prevent')
  , stop = require('stop')
  , template = require('./index.html')
  , value = require('value');


module.exports = Toggle;


/**
 * Initialize a new toggle, optionally taking it's settings from an existing
 * DOM element.
 *
 * @param {Boolean} val (optional)
 * @param {Element} el (optional)
 */

function Toggle (val, el) {
  this.el = el || domify(template);
  this.checkbox = this.el.querySelector('.toggle-checkbox');
  if (el) val = value(this.checkbox);
  if (val !== undefined) this.value(val);
  this.events = events(this.el, this);
  this.events.bind('click');
}


/**
 * Mixin emitter.
 */

Emitter(Toggle.prototype);


/**
 * Get or set the value of the toggle.
 *
 * @param {Boolean} val
 * @return {Toggle}
 */

Toggle.prototype.value = function (val) {
  if (val === undefined) return value(this.checkbox);
  if (this.value() === val) return;
  value(this.checkbox, val);
  this.toggleClass('on', val);
  this.toggleClass('off', !val);
  this.emit('change', val);
  return this;
};


/**
 * Set the toggle's name, on the checkbox. That way forms that get submitted
 * will get the proper value.
 *
 * @param {String} name
 * @return {Toggle}
 */

Toggle.prototype.name = function (name) {
  this.checkbox.name = name;
};


/**
 * Toggle the toggle :)
 *
 * @return {Toggle}
 */

Toggle.prototype.toggle = function () {
  this.value(!value(this.checkbox));
  return this;
};


/**
 * Set the `on` and `off` labels for the toggle.
 *
 * @param {String} on   Text for the `on` position.
 * @param {String} off  Text for the `off` position.
 */

Toggle.prototype.label = function (on, off) {
  if (on) this.el.querySelector('.toggle-on-label').innerHTML = on;
  if (off) this.el.querySelector('.toggle-off-label').innerHTML = off;
};


/**
 * Add class.
 *
 * @param {String} name  Classname to add.
 * @return {Toggle}
 */

Toggle.prototype.addClass = function (name) {
  classes(this.el).add(name);
  return this;
};


/**
 * Remove class.
 *
 * @param {String} name  Classname to remove.
 * @return {Toggle}
 */

Toggle.prototype.removeClass = function (name) {
  classes(this.el).remove(name);
  return this;
};


/**
 * Toggle class.
 *
 * @param {String} name  Classname to toggle.
 */

Toggle.prototype.toggleClass = function (name, to) {
  if (to === undefined) to = classes(this.el).has(name);
  var method = to ? 'add' : 'remove';
  classes(this.el)[method](name);
};


/**
 * Click handler, toggle our value.
 */

Toggle.prototype.onclick = function (e) {
  prevent(e);
  stop(e);
  this.toggle();
};