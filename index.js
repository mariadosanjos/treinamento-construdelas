aluno1 = prompt("Insira o nome do primeiro aluno: ")
notasAluno1 = prompt("Insira suas três notas: ")
notasAluno1 = notasAluno1.split(",")

mediaAluno1 = (parseFloat(notasAluno1[0]) + parseFloat(notasAluno1[1]) + parseFloat(notasAluno1[2]))/3

aluno2 = prompt("Insira o nome do segundo aluno: ")
notasAluno2 = prompt("Insira suas três notas: ")
notasAluno2 = notasAluno2.split(",")

mediaAluno2 = (parseFloat(notasAluno2[0]) + parseFloat(notasAluno2[1]) + parseFloat(notasAluno2[2]))/3

aluno3 = prompt("Insira o nome do terceiro aluno: ")
notasAluno3 = prompt("Insira suas três notas: ")
notasAluno3 = notasAluno3.split(",")

mediaAluno3 = (parseFloat(notasAluno3[0]) + parseFloat(notasAluno3[1]) + parseFloat(notasAluno3[2]))/3

aluno4 = prompt("Insira o nome do quarto aluno: ")
notasAluno4 = prompt("Insira suas três notas: ")
notasAluno4 = notasAluno4.split(",")

mediaAluno4 = (parseFloat(notasAluno4[0]) + parseFloat(notasAluno4[1]) + parseFloat(notasAluno4[2]))/3

aluno5 = prompt("Insira o nome do quinto aluno: ")
notasAluno5 = prompt("Insira suas três notas: ")
notasAluno5 = notasAluno5.split(",")

mediaAluno5 = (parseFloat(notasAluno5[0]) + parseFloat(notasAluno5[1]) + parseFloat(notasAluno5[2]))/3

mensagem = ""

if (mediaAluno1 >= 5) {
    mensagem += aluno1 + " com média: " + mediaAluno1 + "\n"
}
if (mediaAluno2 >= 5) {
    mensagem += aluno2 + " com média: " + mediaAluno2 + "\n"
}
if (mediaAluno3 >= 5) {
    mensagem += aluno3 + " com média: " + mediaAluno3 + "\n"
}
if (mediaAluno4 >= 5) {
    mensagem += aluno4 + " com média: " + mediaAluno4 + "\n"
}
if (mediaAluno5 >= 5) {
    mensagem += aluno5 + " com média: " + mediaAluno5 + "\n"
}
alert("Os alunos aprovados foram:\n\n" + mensagem)