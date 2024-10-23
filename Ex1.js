let nota1 = 0, nota2 = 0, nota3 = 0, media = 0

nota1 = prompt("Digite a primeira nota: ")
nota1 = parseInt(nota1)
nota2 = prompt("Digite a segunda nota: ")
nota2 = parseInt(nota2)
nota3 = prompt("Digite a terceira nota: ")
nota3 = parseInt(nota3)


media = (nota1 + nota2 + nota3) / 3

if (media >= 60)
console.log("Parabens foi aprovado com media de: " + media)

else
console.log("Reprovado com media de: " + media)
