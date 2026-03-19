import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Todo } from '@/entities/Todo';

// Database configuration using environment variables
const dbConfig = {
  type: process.env.DB_TYPE as 'sqlite',
  database: process.env.DB_DATABASE || './todos.db',
  synchronize: process.env.NODE_ENV === 'development', // Auto-create tables in dev
  logging: process.env.NODE_ENV === 'development',
  entities: [Todo],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
};

// Create and export the data source
const AppDataSource = new DataSource({
  ...dbConfig,
});

// Initialize the database connection
export const initializeDatabase = async (): Promise<DataSource> => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  }
  return AppDataSource;
};

export default AppDataSource;