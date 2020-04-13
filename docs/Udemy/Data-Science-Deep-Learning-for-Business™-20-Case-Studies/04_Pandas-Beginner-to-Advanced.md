# Pandas - Beginner to Advanvced

## Loading Data from a GitHub Source

```python
import pandas as pd

# load csv file using pandas
file_name = "http://raw.githubusercontent.com/rajeevatan84/datascienceforbusiness/master/titanic.csv"
df = pd.read_csv(file_name)
```

## Explore the Dataframe

```python
df.head()           # show first 5 rows
df.tail()           # show last 5 rows
df.describe()       # show summary statistics
df.info()           # show summary information
df.dtype            # show data types
df.columns          # show columns
df['name']          # show column 'name'
df.loc[0, "name"]   # show row 0 and column 'name'
df.iloc[0, 1]       # show row 0 and column 1
```

- `DataFrame.info(verbose=None, memory_usage=True, null_counts=True)` 會給出樣本資料的相關資訊概要，比如：行數、列數、列索引、列非空值個數、列類型、記憶體用量
- `DataFrame.describe(percentiles=None, include=None, exclude=None) ` 會給出樣本資料的基本的統計量，包括：平均值、標準差、最大值、最小值、分位數…等

## Save Dataframe to csv or excel Files

```python
# saving to a csv file
df.to_csv("myDataframe.csv")

# saving to an excel file
df.to_excel("myDataframe.xlsx")
```

## Create Dataframes from Non csv sources

```python
# create dataframe from a list
my_list = ["dog", "cat", "pig"]
df_list = pd.DataFrame(my_list)

# create dataframe from a dict
my_dict = {
    'http_status': [200, 200, 404, 404, 301],
    'response_time': [0.04, 0.02, 0.07, 0.08, 1.0]
}
df_dict = pd.DataFrame(my_dict)
```

## Find Empty Cells Using `isnull()`

```python
df.isnull()             # return a True/False DataFrame
df['cabin'].isnull()    # return a True/False Column
df[['cabin'].isnull()]  # return the rows with column 'cabin' are empty
```

## Show Unique Values in a Column

```python
df['estado'].unique()       # show all unique values in a column
len(df['estado'].unique())  # show how many unique values in a column
```

## Rename a Column

```python
new_columns = {
    'ano': 'year',
    'estado': 'state',
    'mes': 'month',
    'numero': 'number_of_fires',
    'encontro': 'data'
}
df.rename(columns = new_columns, inplace=True)
```