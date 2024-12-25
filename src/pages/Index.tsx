import { TodoItem } from "@/components/TodoItem";
import { TodoInput } from "@/components/TodoInput";
import { useTodos } from "@/hooks/useTodos";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";

const Index = () => {
  const { toast } = useToast();
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();

  const handleAddTodo = (text: string) => {
    addTodo(text);
    toast({
      title: "Todo added",
      description: "Your new todo has been added successfully.",
    });
  };

  const handleToggleTodo = (id: string) => {
    toggleTodo(id);
    const todo = todos.find(t => t.id === id);
    toast({
      title: todo?.completed ? "Todo uncompleted" : "Todo completed",
      description: `"${todo?.text}" has been ${todo?.completed ? 'uncompleted' : 'completed'}.`,
    });
  };

  const handleDeleteTodo = (id: string) => {
    const todo = todos.find(t => t.id === id);
    deleteTodo(id);
    toast({
      title: "Todo deleted",
      description: `"${todo?.text}" has been deleted.`,
      variant: "destructive",
    });
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    updateTodo(id, newText);
    toast({
      title: "Todo updated",
      description: "Your todo has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <TodoInput onAdd={handleAddTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
              onUpdate={handleUpdateTodo}
            />
          ))}
          {todos.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No todos yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;