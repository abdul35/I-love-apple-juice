
#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int input;
    double y, x;

    cin >> input;
    if (input == 1)
    {
        cout << "Enter a number\n";
        cin >> x;
        y = (x <= 6) ? x : (x > 6) ? 4 / x * (x + 1) : false;
        cout << y;
    }

    else if (input == 2)
    {
        cout << "Enter a number\n";
        cin >> x;
        y = (x < 1) ? x + 1 : (1 <= x && x <= 2) ? sqrt(2 + x) : (x > 2) ? 4 * x : false;
        cout << y;
    }

    return 0;
}