#!/bin/bash

input_file=$1
output_file=$2
encoded=$(base64 $input_file)

cat > $output_file <<- EOM
export const olly = "data:image/jpeg;base64,$encoded"
EOM
