#!/usr/bin/env sh

# Abort on errors
set -e

# Delete folder incase built error
rm -rf build/.vuepress/dist

# [Build]
npm run docs:build

# Navigate into the build output directory and push to branch
cd docs/.vuepress/dist

# Create .nojekyll file incase built error
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# [Push]
# - if you are deploying to https://<USERNAME>.github.io
#   git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# - if you are deploying to https://<USERNAME>.github.io/<REPO>
#   git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f "https://${access_token}@github.com/Hsins/Udemy-Notes.git" master:gh-pages

cd -
