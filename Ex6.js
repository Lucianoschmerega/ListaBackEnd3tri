let nota1, nota2, nota3, media

nota1 = prompt("Digite a primeira nota: ")
nota1 = parseInt(nota1)
nota2 = prompt("Digite a segunda nota: ")
nota2 = parseInt(nota2)
nota3 = prompt("Digite a terceira nota: ")
nota3 = parseInt(nota3)

if(nota1>=nota2 && nota1>=nota3)
media = ((nota1 * 4)+(nota2 * 3) + (nota3 * 3)) / 10

if(nota2>=nota1 && nota2>=nota3)
media = ((nota2 * 4)+(nota1 * 3) + (nota3 * 3)) / 10

if(nota3>=nota1 && nota3>=nota2)
media = ((nota3 * 4)+(nota2 * 3) + (nota1 * 3)) / 10


if (media >= 60)
console.log("Parabens foi aprovado com media de: " + media)

else
console.log("Reprovado com media de: " + media)
