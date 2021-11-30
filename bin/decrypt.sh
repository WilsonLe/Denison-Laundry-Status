#! /bin/sh

# directory are relative to root, which is where "yarn decrypt" should be executed
INPUT=./src/secrets.gpg
OUTPUT=./src/secrets.json
gpg --quiet --batch --yes --decrypt --passphrase "$PASSPHRASE" --output "$OUTPUT" "$INPUT"