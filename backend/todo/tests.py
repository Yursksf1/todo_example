from django.test import TestCase
from todo   .models import Todo

class TodoTestCase(TestCase):
    def setUp(self):
        Todo.objects.create(title="learn python", description="study every day python", completed=True)
        Todo.objects.create(title="undertand django", description="practice create web application", completed=True)
        Todo.objects.create(title="unitest class", description="keep attention in class about unites", completed=False)

    def test_todos_complete(self):
        """Todos that can speak are correctly identified"""
        all_todos = Todo.objects.all()
        self.assertEqual(len(all_todos), 3)

        complete_todos = Todo.objects.filter(completed=True).all()
        self.assertEqual(len(complete_todos), 2)

        incomplete_todos = Todo.objects.filter(completed=True).all()
        self.assertEqual(len(incomplete_todos), 1)
