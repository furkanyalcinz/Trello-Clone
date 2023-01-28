from Entities.Todo import Todo


todo = Todo(Id=1, Status=2, Title="test", Description="Test description", End_Date=None)

print("None") if todo.Description == None else print(todo.Description)
