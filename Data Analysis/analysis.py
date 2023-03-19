import pandas as pd
from matplotlib import pyplot as plt

# LOADING DATA
df = pd.read_csv('insurance.csv')

# GETTING DATA
# # Non-smoker 18-YO single males
# filtering data
non_somker_male_df = df.loc[(df['children'] == 0) & (df['sex'] == 'male') & (df['age'] == 18) & (df['smoker'] == 'no')]
# gather the necessary info
non_somker_male_df = non_somker_male_df[['bmi'] + ['charges']]
# sorting the data by BMI ascendingly
non_somker_male_df = non_somker_male_df.sort_values('bmi')
# saving the data into a csv file
non_somker_male_df.to_csv('non_smoker_18yo_male.csv', index=False)


# # Smoker 18-YO single males
# filter data
somker_male_df = df.loc[(df['children'] == 0) & (df['sex'] == 'male') & (df['age'] == 18) & (df['smoker'] == 'yes')]
# gather the necessary info
somker_male_df = somker_male_df[['bmi'] + ['charges']]
# sorting the data by BMI ascendingly
somker_male_df = somker_male_df.sort_values('bmi')
# saving the data into the csv file
somker_male_df.to_csv('smoker_18yo_male.csv', index=False)


# # Non-smoker 18-YO single female
# filter data
non_somker_female_df = df.loc[(df['children'] == 0) & (df['sex'] == 'female') & (df['age'] == 18) & (df['smoker'] == 'no')]
# gather the necessary info
non_somker_female_df = non_somker_female_df[['bmi'] + ['charges']]
# sorting the data by BMI ascendingly
non_somker_female_df = non_somker_female_df.sort_values('bmi')
# saving the data into the csv file
non_somker_female_df.to_csv('non_smoker_18yo_female.csv', index=False)


# # Smoker 18-YO single female
# filter data
somker_female_df = df.loc[(df['children'] == 0) & (df['sex'] == 'female') & (df['age'] == 18) & (df['smoker'] == 'yes')]
# gather the necessary info
somker_female_df = somker_female_df[['bmi'] + ['charges']]
# sorting the data by BMI ascendingly
somker_female_df = somker_female_df.sort_values('bmi')
# savin the data into the csv file
somker_female_df.to_csv('smoker_18yo_female.csv', index=False)

# GRAPHING DATA
# x/y values for the non-smoker 18-YO single male
non_smoker_male_x = non_somker_male_df['bmi']
non_smoker_male_y = non_somker_male_df['charges']

# x/y values for the smoker 18-YO single male
smoker_male_x = somker_male_df['bmi']
smoker_male_y = somker_male_df['charges']

# x/y values for the non-smoker 18-YO single female
non_smoker_female_x = non_somker_female_df['bmi']
non_smoker_female_y = non_somker_female_df['charges']

# x/y values for the smoker 18-YO single female
smoker_female_x = somker_female_df['bmi']
smoker_female_y = somker_female_df['charges']

# ploting graphs
plt.plot(non_smoker_male_x, non_smoker_male_y)
plt.plot(smoker_male_x, smoker_male_y)
plt.plot(non_smoker_female_x, non_smoker_female_y)
plt.plot(smoker_female_x, smoker_female_y)

# labelling
plt.xlabel('BMI')
plt.ylabel('Charges')
plt.title('Relationship between BMI and Charges and Smoker and Non-Smoker')
plt.legend(['18YO Male Non-Smoker', '18YO Male Smoker', '18YO Female Non-Smoker', '18YO Female Smoker'])

# displying the graph
plt.show()