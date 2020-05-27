---
pageClass: udemy
---

# Simple Linear Regression

## Theory

$$y = b_0 + b_1 * x_1$$

- $y$: 自變量（DV, Dependent Variable）
- $x_i$: 因變量（IV, Independent Variable）
- $b_0$: 常數（Constant）
- $b_i$: 係數（Coefficient）

## Simple Linear Regression in Python

```python
# Simple Linear Regression

# Importing the libraries
import numpy as np
import matplotlib.pylot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Salary_data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

# Splitting the dataset into the Training Set and Test Set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)

# Fitting Simple Linear Regression to the Training Set
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)

# Predicting the Test Set results
y_pred = regressor.predict(X_test)

# Visualisting the Training Set results
plt.scatter(X_train, y_train, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue')
plt.title('Salary VS Experience (training set)')
plt.xlabel('Years of Experience')
plt.ylalbe('Salary')
plt.show()

# Visualisting the Test Set results
plt.scatter(X_test, y_test, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue')
plt.title('Salary VS Experience (test set)')
plt.xlabel('Years of Experience')
plt.ylalbe('Salary')
plt.show()
```

## Simple Linear Regression in R

```r
# Simple Linear Regression

# Importing the dataset
dataset = read.csv('Salary_Data.csv')

# Splitting the dataset into the Training Set and Test Set
install.package('caTools')
library(caTools)
set.seed(123)
split = sample.split(dataset$Salary, SplitRatio = 2/3)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

# Fitting Simple Linear Regression to the Training Set
regressor = lm(formula = Salary ~ YearsExperience,
               data = training_set)
summary(regressor)

# Predicting the Test set results
y_pred = predict(regressor, newdata=test_set)

# Visualising the Training set results
install.packages('ggplot2')
library(ggplot2)
ggplot() +
  geom_point(aes(x = training_set$YearsExperiences, y = training_set$Salary), colour = 'red') +
  geom_line(aes(x = training_set$YearsExperiences, y = predict(regressor, newdata = training_set)), colour = 'blue') +
  ggtitle('Salary VS Experience (Training Set)') +
  xlab('Years of experience') +
  ylab('Salary')

# Visualising the Test set results
install.packages('ggplot2')
library(ggplot2)
ggplot() +
  geom_point(aes(x = test_set$YearsExperiences, y = test_set$Salary), colour = 'red') +
  geom_line(aes(x = training_set$YearsExperiences, y = predict(regressor, newdata = training_set)), colour = 'blue') +
  ggtitle('Salary VS Experience (Test Set)') +
  xlab('Years of experience') +
  ylab('Salary')
```