---
pageClass: udemy
---

# Flask-RESTful for More Efficient Development

## Setup `virtualenv` and `Flask-RESTful`

```bash
$ virtualenv venv --python=python3.5
$ source venv/bin/activate
$ pip install flask-RESTful
```

## First Flask-RESTful Application

```python
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class Student(Resource):
    def get(self, name):
        return {'student': name}

api.add_resource(Student, '/student/<string:name>')

app.run(port=5000)
```

## Create Item Resource

```python

```