/**
 * DTOs (Data Transfer Objects) & Interfaces
 *
 * Define the shape of data expected in request bodies and JWT payloads.
 * Import these types in controllers and middlewares for type safety.
 *
 */

export interface RegisterDto {
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface CreateTodoDto {
  title: string;
}

export interface UpdateTodoDto {
  title?: string;
  completed?: boolean;
}

export interface JwtPayload {
  userId: string;
}
