a = (3, -4, -1, 1, -2, 5, 4)
sum1 = 0
sum2 = 0
for i in a:
    if i > 0 :
        sum1 += i
    else:
        sum2 += i
print('Сумма положительных:', sum1, 'Сумма отрицательных:', sum2, sep = '\n')
