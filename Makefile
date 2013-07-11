build: components index.js template.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

template.js:
	@component convert template.html

test: build
	open test/index.html

.PHONY: clean test