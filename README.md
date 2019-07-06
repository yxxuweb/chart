1、返回一个全新的Observable对象
2、对上游和下游的订阅及退订
3、处理异常情况
4、及时释放资源


"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "src/**/*.{ts,tsx}": [
        "eslint --fix",
        "git add"
      ]
    },
    "ignore": [
      "**/{dist,build}/**/*.js",
      "**/*.min.js"
    ]
  }