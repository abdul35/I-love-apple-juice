// #include <windows.h>
// #include <locale>
// #include <sstream>
// #include <iostream>
// #include <string>

// using namespace std;


#include <iostream>
#include <math.h>
#include <conio.h>

using namespace std;

int main()
{

    // setlocale(LC_ALL, ".1251");

    double y, x;
    int s;

    cout << "Formula 1" << "\n";
    cout << "Formula 2" << "\n";
    cout << "For exit of programm enter a  < exit > " << endl;     
    cin >> s;
switch(s)
{
    case 5: exit(0);
        break;
    case 1:{
        cout << "Enter values for the solution 1 of the formula" << "\n";
        cout << "If you want to exit the program, enter < exit > " << endl;
        
        cin >> x;
            if (x <= 6) {cout << x << "\n";}
                
            else if (x > 6)
                {
                    y = (x / 4) * (x + 1);
                    cout << "Function y = " << (float)y;
                }
           
            }; break;
    
    
    case 2:{
        cout << "Enter values for  the solution 2 of the formula" << "\n";
        cout << "If you want to exit the program, enter < exit > " << endl;
        cin >> x;
            
            if (x < 1) {x += 1 cout << x << endl; } 
            
(x == 0 || x > 0)?( cout << "You entered a negative number" << endl; ):(else if (1 <= x && x <= 2){x = sqrt(2 + x);cout << " Sqrt  x = "<< x;})
            
            }
            

}
    
return 0;
}
  
// int main()
// {

//     int i
//     ;

//     y =

//     return 0;
// };

// cout << "Enter a number cites";
// int cod;

// cin >> cod;

// if (cod == 863 ){

//    cout << "Rostoc on Don";
// };

// setlocale(LC_ALL, "ru");

// int a, b, square = 0;

// std::cout << "Enter the initial number for squaring: ";

// std::cin >> a;

// std::cout << "Enter the final number to be squared: ";

// std::cin >> b;

// while (a != b + 1) {

//     for (int i = 1; i <= a * 2; i += 2)

//         square += i;

//     std::cout << a << " ^ 2 = " << square << std::endl;

//     a++;

//     square = 0;

// }