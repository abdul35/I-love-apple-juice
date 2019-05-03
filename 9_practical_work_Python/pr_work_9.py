string = 'noL2'
i = string.count('LoL')
if i == 1:
    find = string.index('LoL')
    print(find)
elif i > 1:    
    two = string.find('LoL'),string.rfind('LoL')
    print(two)
else:
    print('This String not LoL')
