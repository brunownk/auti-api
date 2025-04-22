# AUTI API

Backend for the AUTI application, developed with NestJS, TypeScript, and Prisma to provide a robust and scalable API for the interactive learning system for autistic children.

## 🏆 Third Place at FIAP NEXT Festival

Part of the AUTI project that achieved third place at the prestigious FIAP NEXT Festival.

## 📋 About the Project

The AUTI API is the backend component of the AUTI project, responsible for managing data, authentication, and business logic to support the web application. Developed following Clean Architecture and Domain-Driven Design principles, it provides a solid foundation for the system.

### Key Features

- **Clean Architecture**: Organized structure following Clean Architecture principles
- **DDD**: Implementation based on Domain-Driven Design
- **Prisma ORM**: Efficient database management
- **Secure Authentication**: Robust authentication and authorization system
- **Swagger Documentation**: Well-documented and easy-to-integrate API

## 🛠️ Technologies Used

- NestJS
- TypeScript
- Prisma
- MongoDB
- JWT
- Swagger/OpenAPI

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/brunownk/auti-api.git
cd auti-api
```

2. Install dependencies:
```bash
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configurations.

4. Run database migrations:
```bash
yarn prisma migrate dev
```

5. Start the development server:
```bash
yarn start:dev
```

## 📚 API Documentation

The complete API documentation is available at `/api` when the server is running. Access `http://localhost:3000/api` to view the Swagger documentation.

## 🧪 Tests

To run tests:
```bash
yarn test
```

For coverage tests:
```bash
yarn test:cov
```

## 📞 Support and Feedback

For API-related issues or feedback, please open an issue in this repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- [Main Repository](https://github.com/brunownk/auti)
- [Frontend Web](https://github.com/brunownk/auti-web)
