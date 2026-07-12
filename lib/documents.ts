import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const dir = path.join(process.cwd(), 'content/legal');

export type DocumentMeta = {
  slug: string;
  title: string;
};

export function getAllDocuments(): DocumentMeta[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
      return {
        slug,
        title: data.title ?? '',
      };
    })

}

export function getDocument(slug: string): { content: string; data: Record<string, any> } {
  const filePath = path.join(dir, `${slug}.mdx`);
  const { content, data } = matter(fs.readFileSync(filePath, 'utf8'));
  return { content, data };
}


export async function getDocumentHtml(slug: string): Promise<{ html: string; data: Record<string, any> }> {
  const { content, data } = getDocument(slug);
  const processed = await remark().use(remarkHtml).process(content);
  return { html: processed.toString(), data };
}