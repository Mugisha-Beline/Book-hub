# Book Hub Project


## Description
The Bookhub Project is a full-stack web application designed to manage a collection of books. It provides functionalities for creating, reading, updating, and deleting book records, with an intuitive user interface for browsing, searching, and filtering books. 

## Functionalities

- Book Management

 - **Create**: Add new books to the collection with details such as title, author, and publish year.
 - **Read**: View details of all books in a card or table format.
 - **Update**: Edit book details.
 - **Delete**: Remove books from the collection.

## Search and Filtering

- **Search**: Find books by title or author using a search bar.
- **Filter**: Filter books based on specific criteria like publish year.

## User Interface

- **Book Cards**: Display books in a grid layout with quick access to details and actions.
- **Book Table**: List books in a tabular format for easy comparison.
- **Modals**: Show detailed book information in a modal pop-up.
- **Back Button**: Navigate easily to previous pages.

## Navigation

- **Links**: Navigate to book details, edit, and delete pages using links and icons.

## Getting Started

Follow the steps below to set up the project on your local machine and run it:

1. Clone the repository:

```bash
git clone https://github.com/Mugisha-Beline/Book-hub.git
cd book-store-project
```

2. Backend Setup:

```bash
cd backend
npm install
```

- Configure the MongoDB connection by creating a .env file with your MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/bookstore
```

- Start the backend server:
```
npm run dev
```

3. Frontend Setup(new terminal):
```
cd frontend
npm install
npm run dev
```

## Technologies Used
### Backend:
- Node.js
- Express.js
- MongoDB

### Frontend:

- Vite
- React
