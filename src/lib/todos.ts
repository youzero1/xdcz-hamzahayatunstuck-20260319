import { initializeDatabase } from './database';
import { Todo } from '@/entities/Todo';
import { Repository } from 'typeorm';

let todoRepository: Repository<Todo>;

// Initialize repository on first use
const getRepository = async (): Promise<Repository<Todo>> => {
  if (!todoRepository) {
    const dataSource = await initializeDatabase();
    todoRepository = dataSource.getRepository(Todo);
  }
  return todoRepository;
};

// Get all todos
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const repository = await getRepository();
    return await repository.find({ order: { createdAt: 'DESC' } });
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw new Error('Failed to fetch todos');
  }
};

// Add a new todo
export const addTodo = async (title: string, description?: string): Promise<Todo> => {
  try {
    const repository = await getRepository();
    const todo = repository.create({ title, description });
    return await repository.save(todo);
  } catch (error) {
    console.error('Error adding todo:', error);
    throw new Error('Failed to add todo');
  }
};

// Update a todo
export const updateTodo = async (id: number, updates: Partial<Todo>): Promise<Todo> => {
  try {
    const repository = await getRepository();
    await repository.update(id, updates);
    const updatedTodo = await repository.findOne({ where: { id } });
    if (!updatedTodo) {
      throw new Error('Todo not found');
    }
    return updatedTodo;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw new Error('Failed to update todo');
  }
};

// Delete a todo
export const deleteTodo = async (id: number): Promise<void> => {
  try {
    const repository = await getRepository();
    const result = await repository.delete(id);
    if (result.affected === 0) {
      throw new Error('Todo not found');
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw new Error('Failed to delete todo');
  }
};