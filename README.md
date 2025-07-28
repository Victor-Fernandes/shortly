# Shortly - URL Shortener Service

Shortly is a modern URL shortening service built with a microservices architecture using NestJS. The project consists of two main services: an authentication service and a URL shortener service.

## Project Structure

```bash
shortly/
├── apps/
│   ├── auth/              # Authentication microservice
│   └── url-shortener/     # URL shortening microservice
├── docker/               
└── docker-compose.yml    
```

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Container**: Docker
- **Package Manager**: pnpm
- **ORM**: TypeORM
- **Logging**: Winston
- **Testing**: Jest
- **Documentation**: Swagger/OpenAPI

## Pre requisites

- Node.js v22 or higher
- pnpm v8 or higher
- Docker and Docker Compose
- PostgreSQL 15
- Redis 7

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/shortly.git
cd shortly
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# For auth service
cd apps/auth
cp .env.example .env

# For url-shortener service
cd ../url-shortener
cp .env.example .env
```

4. Start the infrastructure services:
```bash
docker-compose up -d postgres redis
```

5. Run database migrations:
```bash
# In the auth service directory
cd apps/auth
pnpm run migration:generate src/infrastructure/database/migrations/createUserTable
pnpm run migration:run
```

6. Start the services in development mode:
```bash
# In the root directory
pnpm dev
```

## Available Scripts

### Auth Service (apps/auth)

- `pnpm dev` - Start the service in development mode
- `pnpm build` - Build the service
- `pnpm test` - Run tests
- `pnpm migration:generate` - Generate new migrations
- `pnpm migration:run` - Run pending migrations
- `pnpm migration:revert` - Revert last migration
- `pnpm migration:show` - Show migration status

### URL Shortener Service (apps/url-shortener)

- `pnpm dev` - Start the service in development mode
- `pnpm build` - Build the service
- `pnpm test` - Run tests

## Architecture

The project follows a hexagonal (ports and adapters) architecture with clear separation of concerns:

```bash
src/
├── domain/           # Business entities and interfaces
├── application/      # Use cases and services
└── infrastructure/   # External concerns (database, cache, etc.)
    ├── adapters/    
    ├── database/    
    └── logger/      
```

### Key Features

1. **Auth Service**
   - JWT-based authentication
   - User management
   - Role-based access control
   - Secure password hashing

2. **URL Shortener Service**
   - URL shortening with custom aliases
   - Analytics tracking
   - Rate limiting
   - Cache management

## API Documentation

- Auth Service: http://localhost:3001/api/docs
- URL Shortener: http://localhost:3000/api/docs

## Development Guidelines

1. **Code Style**
   - Follow NestJS best practices
   - Use TypeScript strict mode
   - Follow SOLID principles
   - Use dependency injection

2. **Git Workflow**
   - Feature branches
   - Conventional commits
   - Pull request reviews

3. **Testing**
   - Unit tests for business logic
   - Integration tests for APIs
   - E2E tests for critical flows

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.