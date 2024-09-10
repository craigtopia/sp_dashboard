#!/bin/bash

# Create a YAML file from the .env file
echo "Converting .env.production to env-production-gcloud.yml"
echo "" > env-production-gcloud.yml

# Read each line in the .env.production file and convert to YAML
while IFS='=' read -r key value; do
  if [[ $key != \#* ]]; then  # Ignore lines starting with a #
    echo "$key: \"$value\"" >> env-production-gcloud.yml
  fi
done < .env.production

echo "Conversion complete."

