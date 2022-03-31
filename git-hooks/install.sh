#!/bin/bash -euo pipefail

set -x

thisdir=$(dirname $0)

cp -p "$thisdir"/pre-push "$thisdir"/../.git/hooks/
