#include <stdio.h>
#include <iostream> 
using namespace std;

int main()
{
    int a;
    cout << "Проверка двузначности: \n";
    cin >> a;
        
    if(a >= 10 && a < 100)cout << a << "\t" <<"\n"<< "это двузначный число!" << endl;
    else cout << "Вы ввели не двузначный число" << "\n";
    
    cout << "Проверка на чётность:  ";
    // cin >> b;
    
    if(a%2==0)cout << a << "\t" << "\n" << "это четный число!\n";
    else cout << "не четный";

    
    cout << "Заканчивается ли число на 3 проверим:  \n";
    // cin >> c;
    
    if(a%10==3)cout << a << "\t" << "\n" << "Да заканчивается на 3!" << endl;
    else cout << "не заканчивается на 3";

    return 0;    
}
