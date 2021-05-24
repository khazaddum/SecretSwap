PROJ_NAME=secretswapdocs

all : $(PROJ_NAME)

.PHONY : all

$(PROJ_NAME) : intro.html swapping.html liquidity.html faq.html governance.html glossary.html factory.html newpair.html query.html pair.html contracts.html
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
	pandoc -s factory.md --highlight-style="tango" --metadata title="Factory" -o $@

newpair.html : newpair.md
	pandoc -s newpair.md --highlight-style="tango" --metadata title="How to Create New Pair" -o $@

query.html : query.md
	pandoc -s query.md --highlight-style="tango" --metadata title="Query" -o $@

pair.html : pair.md
	pandoc -s pair.md --highlight-style="tango" --metadata title="Pair" -o $@

contracts.html : contracts.md
	pandoc -s contracts.md --highlight-style="tango" --metadata title="Contract Addresses" -o $@

clean:
	rm *.html
