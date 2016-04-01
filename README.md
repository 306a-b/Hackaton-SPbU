# Hackaton SPbU

## Backlog

- [Trello](https://trello.com/b/bdVsKivd/hackaton-spbu)
- [Slack chat](https://hackaton-spbu.slack.com/messages/general/)

## Team

| Name | Contacts |
| :--- | :--------: |
| Arseny Tsypushkin | [VK](https://vk.com/arseny_tsypushkin) |
| Matvey Startsev | [VK](https://vk.com/kortik_ekb) |
| Evgeny Orlov | [VK](https://vk.com/schvl) |
| Artyom Anashev | [VK](https://vk.com/madmed677) |

---

## FrontEnd

### Development
```
$ npm install
$ npm start
```

### Production
```
$ npm install
$ npm test
$ npm run build
```

### Test
```
$ npm test
```

## Heroku
### heroku install
1. Install from
```
https://devcenter.heroku.com/articles/getting-started-with-python#set-up
```
2. do in cmd
```
$ heroku login
```
### Update production server
commit all your changes
- if you use branch master
```
$ git push heroku master
```
- if you use your own branch
```
$ git push heroku _branch-name_:master
```
### Create app
```
$ heroku create _name_ --buildpack heroku/python
$ git push heroku master
$ heroku config:set HEROKU=1
```
### Delete app
```
$ heroku apps:destroy --app _name_ --confirm _name_;
```
but it's simplier to do it in Dashboard on heroku.com
### Load test data
```
heroku run init
heroku run test_samples
```


## Python
in virtual enviroment:
```
$ pip3 install -r requirements.txt
```

