#!/usr/bin/env nix-shell
#! nix-shell -i "make -f" -p gnumake -p pandoc -p texlive.combined.scheme-medium

.PHONY: all clean
.SUFFIXES: .md .pdf

all: $(patsubst %.md,%.pdf,$(wildcard *.md))

%.pdf: %.md
	pandoc -o $@ $<

clean:
	rm -f *.pdf