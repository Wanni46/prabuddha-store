// lib/products.ts

// Product interface
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}

// Sample products
const products: Product[] = [
    { id: 1, name: 'The Great Gatsby', category: 'Fiction', price: 10.99, description: 'A novel by F. Scott Fitzgerald.' },
    { id: 2, name: '1984', category: 'Fiction', price: 9.99, description: 'A dystopian novel by George Orwell.' },
    { id: 3, name: 'To Kill a Mockingbird', category: 'Fiction', price: 12.99, description: 'A novel by Harper Lee.' },
    { id: 4, name: 'Sapiens: A Brief History of Humankind', category: 'Non-Fiction', price: 14.99, description: 'A book by Yuval Noah Harari.' },
    { id: 5, name: 'Educated', category: 'Non-Fiction', price: 13.99, description: 'A memoir by Tara Westover.' },
    { id: 6, name: 'The Immortal Life of Henrietta Lacks', category: 'Non-Fiction', price: 11.99, description: 'A book by Rebecca Skloot.' },
    { id: 7, name: 'Mathematics for Machine Learning', category: 'Educational', price: 29.99, description: 'A comprehensive guide for mathematics required for machine learning.' },
    { id: 8, name: 'The Complete Guide to Guitar Playing', category: 'Educational', price: 22.99, description: 'An extensive guide to mastering guitar skills.' },
    { id: 9, name: 'Programming in TypeScript', category: 'Educational', price: 24.99, description: 'A detailed book on TypeScript programming.' },
    { id: 10, name: 'Moleskine Classic Notebook', category: 'Stationery', price: 19.99, description: 'A high-quality notebook for notes and sketches.' },
    { id: 11, name: 'Staedtler Triplus Fineliner Pens', category: 'Stationery', price: 15.99, description: 'Felt-tip pens for vibrant writing.' },
    { id: 12, name: 'Pilot G2 Gel Pens', category: 'Stationery', price: 12.49, description: 'Smooth gel ink pens for everyday use.' },
    { id: 13, name: 'Communication Skills for Effective Management', category: 'Communication', price: 34.99, description: 'A guide to enhancing communication skills.' },
    { id: 14, name: 'Persuasive Communication', category: 'Communication', price: 29.99, description: 'A book focusing on persuasive communication techniques.' },
    { id: 15, name: 'How to Win Friends and Influence People', category: 'Communication', price: 27.99, description: 'A classic self-help book by Dale Carnegie.' },
    { id: 16, name: 'Pride and Prejudice', category: 'Fiction', price: 11.99, description: 'A romantic novel by Jane Austen.' },
    { id: 17, name: 'Becoming', category: 'Non-Fiction', price: 17.99, description: 'A memoir by Michelle Obama.' },
    { id: 18, name: 'Rich Dad Poor Dad', category: 'Non-Fiction', price: 18.99, description: 'A personal finance classic by Robert Kiyosaki.' },
    { id: 19, name: 'The Art of Learning', category: 'Educational', price: 23.99, description: 'A book by Josh Waitzkin on learning and mastery.' },
    { id: 20, name: 'The Elements of Style', category: 'Educational', price: 19.99, description: 'A guide to writing style by William Strunk Jr. and E.B. White.' }
];

export default products;