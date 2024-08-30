#!/bin/sh

git clone iai@iai.git.backlog.com:/KAIHATUKANKYO/laravel-mix-config.git
cp laravel-mix-config/webpack.mix.js laravel-mix-config/package.json laravel-mix-config/svg.config.json laravel-mix-config/svgo.config.json laravel-mix-config/imagemin.config.mjs laravel-mix-config/.editorconfig ./

mv laravel-mix-config/defaultREADME.md ./README.md

rm -rf laravel-mix-config

npm install

git init

echo node_modules/ >> .gitignore

mkdir public
cd public/

mkdir common

cd ../

mkdir resources

cd resources

mkdir {scss,js}
cd scss
mkdir page

git clone iai@iai.git.backlog.com:/KAIHATUKANKYO/sassbase.git

mv sassbase/base ./
rm -rf sassbase
cd base
rm -rf .git
mv ./style.scss ../

cd ../../js

echo '' > script.js

cd ../../

npm run dev