let A,B,C,D

A = prompt("Qual é o seu salario? ")
A = parseInt(A)
B = prompt("digite o codigo do seu cargo ")

if(B==101)
C = A * 0.10 + A

if(B==102)
C = A * 0.20 + A

if(B==103)
C = A * 0.30 + A

if(B<101 || B>103)
C = A * 0.40 + A

D = C - A
console.log("seu novo salario é de "+C+" e teve um aumenteo de "+D)
