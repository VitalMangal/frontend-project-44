install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .

link:
	npm link