
import random
import time

myList  = ["rock","paper","scissor"]
girdi = int(input("choose your weapon: \n 1-rock \n 2-paper \n 3-scissor "))
print("Lets begin to game ! ")
choice1 = myList[girdi-1]
choice2 = myList[random.randint(0,2)]
print("P1's choice is {choice}".format(choice=choice1))

time.sleep(2)

print("And P2's choice is ?!...")

for i in range(3,0,-1):
    print(i)
    time.sleep(1.3)

print(choice2.upper()+ " !")

if choice1=="rock" and choice2 == "paper":
    print("The winner is P2!!!")

elif choice1=="rock" and choice2 == "scissor":
    print("The winner is P1!!!")

elif choice1=="scissor" and choice2=="paper":
     print("The winner is P1!!!")    

elif choice1=="scissor" and choice2=="rock":
     print("The winner is P2!!!")  

elif choice1=="paper" and choice2=="scissor":
     print("The winner is P2!!!")    

elif choice1=="paper" and choice2=="rock":
     print("The winner is P1!!!")   

else:
    print("It is draw !!!")



