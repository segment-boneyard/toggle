# toggle

  A toggle UI element.
  
  ![on](https://dsz91cxz97a03.cloudfront.net/oRGz5a0ban-2000x2000.png)
  ![off](https://dsz91cxz97a03.cloudfront.net/M39NaLzXwI-2000x2000.png)

## Installation

    $ component install segmentio/toggle

## Example
    
```js
var Toggle = require('toggle');

var toggle = new Toggle();
document.body.appendChild(toggle.el);

toggle.value(); // false

toggle.value(true);
toggle.value(); // true

toggle.toggle();
toggle.value(); // false
```

## API

```html
<div class="toggle">
  <label class="toggle-on-label"></label>
  <div class="toggle-switch">
    <input class="toggle-checkbox" type="checkbox">
  </div>
  <label class="toggle-off-label"></label>
</div>
```

### Toggle(value, el)
  Create a new toggle with an optional starting `value` and optional `el` to use instead of creating one.

### #el
  The toggle's DOM element.

### #value(val)
  Get or set the value of the toggle.

### #name(name)
  Set the toggle's internal checkbox's name, so forms can be submitted properly.

### #toggle()
  Toggle the value of the toggle.

### .label(on, off)
  Set the on and off labels's HTML.

### .addClass(name)
  Add a class to the toggle's element.

### .removeClass(name)
  Remove a class from the toggle's element.

## License

  MIT
