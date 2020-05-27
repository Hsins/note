---
pageClass: udemy
---

# Data Preprocessing

## Importing the Dataset

### Implementation (Python)

```python
# import the libraries
import numpy as np
import matplotlib.pylot as plt
import pandas as pd

# import the dataset
dataset = pd.read_csv('Data.csv')
X = dataset.iloc[:, :-1].values     # create the independent variable matrix
y = dataset.iloc[:, 3].values       # create the dependent variable vector
```

### Implementation (R)

```r
# import the dataset
dataset = read.csv('Data.csv')
```

## Missing Data

在現實的數據中，資料集中可能會有資料缺失的狀況。為了能夠得到適當的機器學習模型，對於這樣的狀況，我們通常會採用以下的幾種策略進行處理：

- 直接刪去欄位中資料缺失的該筆資料（但這樣做的危險性較高，因為我們可能會誤刪了重要的資料）
- 使用整筆資料的平均值、中位數或眾數來填入空缺

### Implementation (Python)

```python
# taking care of missing data
from sklearn.preprocessing import Imputer
imputer = Imputer(missing_value = np.nan, strategy = 'mean', axis = 0)
imputer = Imputer.fit(X[:, 1:3])
X[:, 1:3] = imputer.transform(X[:, 1:3])
```

### Implementation (R)

```r
# taking care of missing data
dataset$Age = ifelse(is.na(dataset$Age),
                     ave(dataset$Age, FUN = function(x) mean(x, na.rm = True)),
                     dataset$Age)

dataset$Salary = ifelse(is.na(dataset$Salary),
                        ave(dataset$Salary, FUN = function(x) mean(x, na.rm = True)),
                        dataset$Salary)
```

```r
# taking care of missing data
dataset$Age[is.na(dataset$Age)] = mean(dataset$Age, na.rm = True)
dataset$Salary[is.na(dataset$Age)] = mean(dataset$Salary, na.rm = True)
```

## Categorical Data

數據集中有些資料屬於類別型資料（Categorical Data），比如當前資料中的國家欄位 `Country` 與是否購買欄位 `Purchased`。由於在進行機器學習模型訓練時，會使用到許多數學方程式，因此對於這些以字串或其他型態所儲存的資料必須先轉換為數字，在統計學中將這樣把蒐集到的樣本資料轉換為具有明確意義變數的過程稱為衡量（measurement），在實務上我們會根據衡量尺度（measurement scale）的不同來選擇編碼（encoding）方式。


### Measurement Scale

資料的衡量尺度是給予資料一個實數值，作為比較或計算的基礎，常用的衡量尺度有：

- 名目尺度（nominal scale）：又稱為類別尺度，類別資料可以進行歸類，彼此間並沒有先後順序或等級關係
- 順序尺度（ordinal scale）：用以衡量有重要、強弱或大小…程度等級順序的資料
- 區間尺度（interval scale）：又稱為等距尺度，區間資料可以任意設置原點，數值之間的差距有意義，但比例無意義
- 比例尺度（ratio scale）：衡量有固定原點的量，也就是資料中存在有 0 值，表示「沒有」的意思

### Encoding

- 標籤編碼（Label Encoding）：將每個類別對應到某個數值，不會對原有的欄位進行擴展，通常用於順序尺度
- 虛擬變數（Dummy Encoding）：當特徵具有 $m$ 個不同類別標籤時，擴展為對應的 $m-1$ 個二進制特徵，作為基準的特徵將被忽略，通常用於名目尺度
- 獨熱編碼（One Hot Encoding）：當特徵具有 $m$ 個不同類別標籤時，擴展為對應的 $m$ 個二進制特徵，通常用於名目尺度。容易導致共線性的問題，從而使得模型參數估計不準確

### Implementation (Python)

```python
# Encoding categorical data
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder_X = LabelEncoder()
X[:, 0] = labelencoder_X.fit_transform(X[:, 0])
onehotencoder = OneHotEncoder(categorical_features = [0])
X = onehotencoder.fit_transform(X).toarray()
labelencoder_y = LabelEncoder()
y = labelencoder_y.fit_transform(y)
```

### Implementation (R)

```r
# Encoding categorical data
dataset$Country = factor(dataset$Country,
                         levels = c('France', 'Spain', 'Germany'),
                         labels = c(1, 2, 3))

dataset$Purchased = factor(dataset$Purchased,
                           levels = c('No', 'Yes'),
                           labels = c(0, 1))
```

## Splitting the Dataset into to Training Set and Test Set

### Implementation (Python)

```python
# Splitting the dataset into the Training Set and Test Set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)
```

### Implementation (R)

```r
# Splitting the dataset into the Training Set and Test Set
# install.package('caTools')
library(caTools)
set.seed(123)
split = sample.split(dataset$Purchased, SplitRatio = 0.8)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)
```

## Feature Scaling

### Standardisation

$$x_{\text{stand}} = \frac{x - \text{mean}(x)}{\text{Standard Deviation}(x)}$$

### Normalisation

$$x_{\text{norm}} = \frac{x - \min{(x)}}{\max{(x)} - \min{(x)}}$$

### Implementation (Python)

```python
# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X_train = sc_X.fit_transform(X_train)
X_test = sc_X.transform(X_test)
```

### Implementation (R)

```r
# Feature Scaling
training_set[, 2:3] = scale(training_set[, 2:3])
test_set[, 2:3] = scale(test_set[, 2:3])
```