# Игры разума
Набор консольных мини-игр. Все игры запускаются по отдельности.

В каждой игре пользователь должен дать правильный ответ на три вопроса подряд. 
Если пользователь ввел верный ответ, он видит сообщение:
```
Correct!
```
и игра продолжается дальше, до 3 верных ответов.

После трех успешных ответов, выводится:
```
Congratulations, {{ username }}!
```
и игра заканчивается.

В случае, если пользователь даст неверный ответ, игра завершается и выводится сообщение:
```
{{ userAnswer }} is wrong answer ;(. Correct answer was {{ correctAnswer }}.
Let's try again, {{ username }}!
```

### Требования
1. Node.js версии 13 и выше


### Разворачивание проекта
1. make install
2. npm link



## Игра: "Проверка на чётность"
Суть игры: пользователю показывается случайное число. И ему нужно ответить ```yes```, если число чётное, или ```no``` — если нечётное

**Запуск игры**
```
brain-even
```

**Пример**
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
### Asciinema

[![asciicast](https://asciinema.org/a/564843.svg)](https://asciinema.org/a/564843)

## Игра: "Калькулятор"
Суть игры: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

**Запуск игры**
```
brain-calc
```

**Пример**
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
**Asciinema**
[![asciicast](https://asciinema.org/a/565025.svg)](https://asciinema.org/a/565025)

## Игра: "НОД"
Суть игры: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

**Запуск игры**
```
brain-gcd
```

**Пример**
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
**Asciinema**
[![asciicast](https://asciinema.org/a/565028.svg)](https://asciinema.org/a/565028)

## Игра: "Арифметическая прогрессия"
Суть игры: пользователю показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Пользователь должен определить это число.

**Запуск игры**
```
brain-progression
```


**Пример**
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```
**Asciinema**
[![asciicast](https://asciinema.org/a/565026.svg)](https://asciinema.org/a/565026)

## Игра: "Простое ли число"
Суть игры: пользователю показывается число. И ему нужно ответить ```yes```, если число простое, или ```no``` — если не простое.

**Запуск игры**
```
brain-prime
```

**Пример**
```
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
**Asciinema**
[![asciicast](https://asciinema.org/a/565030.svg)](https://asciinema.org/a/565030)


### Hexlet tests and linter status:
[![Actions Status](https://github.com/IgorGram/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/IgorGram/frontend-project-44/actions)
### CodeClimate:
[![Maintainability](https://api.codeclimate.com/v1/badges/889af0482e121e26ef0b/maintainability)](https://codeclimate.com/github/IgorGram/frontend-project-44/maintainability)

