PROJ_NAME=secretswapdocs

all : $(PROJ_NAME)

.PHONY : all

$(PROJ_NAME) : intro.html swapping.html liquidity.html faq.html governance.html glossary.html factory.html
	echo "Updated samples"

intro.html : intro.md
	pandoc -s intro.md --metadata title="Introduction" -o $@

swapping.html : swapping.md
	pandoc -s swapping.md --metadata title="Swapping" -o $@

liquidity.html : liquidity.md
	pandoc -s liquidity.md --metadata title="Liquidity" -o $@

faq.html : faq.md
	pandoc -s faq.md --metadata title="Frequently Asked Questions" -o $@

governance.html : governance.md
	pandoc -s governance.md --metadata title="Governance" -o $@

glossary.html : glossary.md
	pandoc -s glossary.md --metadata title="Glossary" -o $@

factory.html : factory.md
	pandoc -s factory.md --metadata title="Factory" -o $@

clean:
	rm *.html
