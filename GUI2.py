import tkinter as t
def clicked():
    lbl.configure(text = txt ,get=5)
    if sex:
        lbl.configure(text = "Hello haw are you")
    else:
        lbl.configure(text = "IZIII")
window = t.Tk()# люббое графически окно начинается с окна 
window.title = (" Video Host")
window.geometry("1200x1860")
chk = t.Checkbutton ( window , text = " Nice !  " )
lbl = t.Label ( window,text = "Hay, working." ,font = ( "  Metro ", 24  ) )
buttonText = t.StringVar()
buttonText.set("check")#установливается значения виджет set |это класс переменная модуль ткинтер для хранения состояния 
btn = t.Button(textvariable = buttonText, background = "Blue", foreground ="yellow", padx = "50", pady = "20", font = "14",command = clicked  )

chk.pack(side  = "left",padx = "70", pady = "10")#один из 3 менежер гиометри  способ размешегия виджетов в окне. Йеденно времено можно использлвать 1 метод распологает вертикально друг на друга.отрисовается  ( pe g) 
btn.pack(side ="right",pady = "50", padx = "40"  ) 
lbl.pack(side ="bottom",ipadx = "15", ipady = "60" )
txt = t.Entry(window, width = 30 , )
sex = t.BooleanVar()
txt.pack ()
men = t.Radiobutton(window, text = "Man ", variable = sex, value = True)
woman = t.Radiobutton(window, text ='Woman', variable = sex, value = False)

window.mainloop()
