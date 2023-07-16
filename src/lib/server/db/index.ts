import Database from 'better-sqlite3';
import type { SessionPost } from './types';
import { env } from '$env/dynamic/private';

const dbPath = env.DB_PATH ?? './data/database.db';

const db = new Database(dbPath);

export function readPosts(): SessionPost[] {
  const sql = `SELECT rowid,* FROM posts`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  console.log(rows);
  return rows as SessionPost[];
}

export function readPostById(id: any): SessionPost {
  const sql = `SELECT * FROM posts WHERE rowid = ?`;
  const stmnt = db.prepare(sql);
  return stmnt.get(id);
}

export function createNewPost( date: string, title: string, htmlContent: string ): void {
  const sql = `INSERT INTO posts (date, title, htmlContent) VALUES (?, ?, ?)`
  const insert = db.prepare(sql);
  insert.run(date, title, htmlContent);
}
