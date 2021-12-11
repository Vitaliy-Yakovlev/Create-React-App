# Гайд по [Create React App](https://create-react-app.dev/docs/getting-started/#npm) -'React'-

<a href="https://ru.reactjs.org/">
<img src = "https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png" alt ="React" width =800px/>
</a>

1. Создаем репозиторий на [Github](https://github.com/)
2. Создаем React приложение -

 ``` npm
          npx create-react-app .
 ```

3. Eсли еще не установлены, ставим - [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
4. Установить [валидация пропсов](https://www.npmjs.com/package/prop-types) -

``` npm
         npm i prop-types
```

1. Установить Prettier <a href="https://prettier.io/"><img src = "https://prettier.io/icon.png" alt ="Prettier" width =15px/></a> 

``` npm
         npm install --save-dev prettier eslint
```

6. Установить lint и huskyrc -
 
``` npm
         npx mrm@2 lint-staged
```
  
---

 В VSCode => setting.json в конце добавялем для комфортной работы, после установки плагинов для авто сохранения и форматирования файлов.

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Деплой на Github pages:
[Video]( https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view)

1. В файле "package.json"  

```json
 "homepage": "https://Vitaliy-Yakovlev.github.io/my-app"
 ```

2. Добавить пакет -

``` npm
         npm install --save gh-pages
 ```

1. Добавить в package.json такие скрипты:
  
``` json  
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

``` npm
npm run deploy
```

---

## Деплой на [NETLIFY](https://app.netlify.com/) <img  alt="HTML5" width="35px" src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>

1. Создаем файл в корне проекта (src) 

```npm
       netlify.toml
```

*там настройка:
  
``` npm
[build]
 publish = "build"

 [[redirects]]
  from="/*"
  to="/index.html"
  status = 200
```

1. Устанавливаем пакет -

``` npm
         npm install netlify-cli -g
 ```

2. Выполняем команду -

``` npm
         netlify login
```

3. Добавялем скрипт -  

``` json "predeploy": "npm run build",
"deploy": "netlify deploy -p"
```

4. При первом деплои, стрелками выбрать : + Create & configure a new site
5. Зайти на страницу -

``` npm
                                                                     netlify open --site
```

---

## Видео инструкция

1. [Netlify CLI и npm-скрипты](https://drive.google.com/file/d/1sUdq5187Uf5uo5EfqPrEEE52ssPj11Xh/view)
2. [Создания проекта и деплой](https://drive.google.com/file/d/1RXumPAthh_qJSp6hr6ImwF5ljRvWE47e/view)
