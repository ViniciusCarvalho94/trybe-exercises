# recu_students = []
# with open("students.txt") as grades_file:
#     for line in grades_file:
#         student_grade = line
#         student_grade = student_grade.split(" ")
#         if int(student_grade[1]) < 6:
#             recu_students.append(student_grade[0])

# with open("recu_students.txt", mode="w") as file:
#     for student in recu_students:
#         file.writelines(f"{student}\n")

file = open("students.txt", mode="w")
LINES = ["Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 9\n", "Miguel 5\n"]
file.writelines(LINES)
file.close()

file = open("students.txt", mode="r")
for line in file:
    print(line) 
file.close() 


recuStudents = []
with open("students.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0])


with open("recuStudents2.txt", mode="w") as file:
    for student in recuStudents:
        file.writelines(f"{student}\n")


with open("recuStudents2.txt", mode="r") as file:
    for line in file:
        print(line)