all:
	make "updated: $$(date)"

%:
	make min
	git add .
	git commit -am "$@"
	git push

min:
	@echo "minifying js..."
	@cat src/*.js | curl -X POST -s --data-urlencode "input=$$(cat -)" "https://javascript-minifier.com/raw" > page.js &
	@echo "minifying css..."
	@for i in src/*.css; do \
		echo $$i; \
		curl -X POST -s --data-urlencode "input@$$i" 'https://cssminifier.com/raw' > $$(basename "$$i" '.css').min.css & \
		done; \
		while test -n "$$(jobs -r 2>&1)"; do continue; done;

push pull:
	git branch
	git $@

# curl -X POST -s --data-urlencode 'input@ready.js' https://javascript-minifier.com/raw > ready.min.js

page.js:
	cat src/*.js > page.js

.PHONY: page.js
