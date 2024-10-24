let A,B,C

A = prompt("Qual é o codigo do produto? ")
B = prompt("Quantas unidades deseja comprar? ")

if(A == "ABCD")
C = B * 5.30

if(A == "XYPK")
C = B * 6.00

if(A == "KLMP")
C = B * 3.20

if(A == "QRST")
C = B * 2.50

if(A=="ABCD" || A == "XYPK" || A == "KLMP" || A == "QRST")
console.log("o total da comprar foi de: "+ C)

else
console.log("codigo invalido")
