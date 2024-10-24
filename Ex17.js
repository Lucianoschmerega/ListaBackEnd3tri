let A, B, C,I,n1,n2,n3

A = prompt("Digite o primeiro valor: ")
B = prompt("Digite o segundo valor: ")
C = prompt("Digite o teceiro valor: ")
I = prompt("Qual sera o conjunto? ")

if(A<B && A<C)
    n1 = A
if(B<C && B<C)
    n1 = B
if(C<A && C<B)
    n1 = C

if(A>B && A>C)
    n3 = A
if(B>A && B>C)
    n3 = B
if(C>A && C>B)
    n3 = C
    
if(A<n3 && A>n1)
    n2 = A
if(B>n1 && B<n3)
    n2 = B
if(C>n1 && C<n3)
    n2 = C


if (I == 1)
console.log(n1+ " "+ n2+" "+n3 )

if (I == 2)
console.log(n3+ " "+ n2+" "+n1 )

if (I == 3)
console.log(n1+ " "+ n3+" "+n2 )
