// src/lib/forum.ts
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'your_db_name'; // !! Make sure this is correct
const CATEGORIES_COLLECTION = 'forumCategories';

// Define the type for our Category
export type ForumCategory = {
  _id: string; // MongoDB will give us this
  name: string;
  description: string;
  order: number;
};

export async function getForumCategories() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);

    const categories = await db
      .collection(CATEGORIES_COLLECTION)
      .find({})
      .sort({ order: 1 })
      .toArray();

    // We need to convert the MongoDB _id to a string for our components
    return JSON.parse(JSON.stringify(categories)) as ForumCategory[];
  } catch (error) {
    console.error('Error fetching forum categories:', error);
    return []; // Return an empty array on error
  }
}