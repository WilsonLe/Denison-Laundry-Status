#! /bin/sh

# directory are relative to root, which is where "yarn encrypt" should be executed
OUTPUT=./src/secrets.gpg
INPUT=./src/secrets.json
gpg --quiet --batch --yes --symmetric --cipher-algo AES256 --output "$OUTPUT" --passphrase "$PASSPHRASE" "$INPUT"
