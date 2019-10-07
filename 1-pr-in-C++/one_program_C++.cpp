#include <stdio.h>
#include <iostream> 
using std::cout,std::cin, std::endl;

int main()
{
    int a;
    cout << "Проверка двузначности:  ";
    cin >> a;
        
    if(a >= 10 && a < 100)
    {
        cout << a << "\t" <<"\n"<< "это двузначный число!" << endl;
    }
    else {if{}} cout << "Вы ввели не двузначный число" << "\n";
    
    cout << "Проверка на чётность:  ";
    // cin >> b;
    
    if(a%2==0){
        cout << a << "\t" << "\n" << "это четный число!" << endl;
    }else cout << "не четный";

    
    cout << "Заканчивается ли число на 3 проверим:  " << "\n";
    // cin >> c;
    
    if(a%10==3){
        cout << a << "\t" << "\n" << "Да заканчивается на 3!" << endl;
    }
    else cout << "не заканчивается на 3";
    
    
    return 0;
    
}
