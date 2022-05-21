export type Book = {
  title: string;
  subtitle: string | null;
  thumbnail: string;
  author: string[];
  isbn: string | null;
  tags: string[] | null;
  year: number;
};

export const BOOKS: Book[] = [
  {
    title: 'Designing Data-Intensive Applications',
    subtitle:
      'The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
    thumbnail: require('./books/designing-data-intensive-applications.png'),
    author: ['Martin Kleppmann'],
    tags: [],
    isbn: '978-1449373320',
    year: 2017,
  },
];
