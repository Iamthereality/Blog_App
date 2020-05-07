import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, liked INT)',
                    [],
                    () => resolve(),
                    (_, error) => reject(error)
                );
            });
        });
    }

    static getPosts() {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                );
            });
        });
    }

    static createPost({ text, img, date }) {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO posts (text, date, liked, img) VALUES (?, ?, ?, ?)`,
                    [text, date, 0, img],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                );
            });
        });
    }

    static updatePost(post) {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'UPDATE posts SET liked = ? WHERE id = ?',
                    [post.liked ? 0 : 1, post.id],
                    () => resolve(),
                    (_, error) => reject(error)
                );
            });
        });
    }

    static removePost(id) {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'DELETE FROM posts WHERE id = ?',
                    [id],
                    () => resolve(),
                    (_, error) => reject(error)
                );
            });
        });
    }
}