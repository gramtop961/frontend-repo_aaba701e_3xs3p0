import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Bookmark } from 'lucide-react';

const samplePosts = [
  {
    id: '1',
    title: 'Добро пожаловать в новый форум! 🎉',
    author: 'admin',
    tags: ['Объявления', 'Сообщество'],
    excerpt: 'Это демонстрационная лента. Здесь будут показываться реальные темы после подключения сервера.',
    likes: 12,
    comments: 5,
  },
  {
    id: '2',
    title: 'Поделитесь любимыми инструментами для React',
    author: 'maria',
    tags: ['React', 'Инструменты'],
    excerpt: 'Какие библиотеки вы используете чаще всего? Почему? Давайте обсудим лучшие практики.',
    likes: 34,
    comments: 18,
  },
];

export default function Feed() {
  return (
    <div className="space-y-3">
      {samplePosts.map((post, idx) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.3 }}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-1 text-sm text-gray-600">Автор: <span className="font-medium">{post.author}</span></p>
              <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-700"># {t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
            <Action label="Нравится" count={post.likes}><Heart size={16} /></Action>
            <Action label="Комментарии" count={post.comments}><MessageSquare size={16} /></Action>
            <Action label="Сохранить"><Bookmark size={16} /></Action>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function Action({ children, label, count }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-gray-600 transition hover:bg-gray-50 hover:text-[#1F6FEB] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
      aria-label={label}
      title={label}
    >
      {children}
      {typeof count === 'number' && <span className="text-xs">{count}</span>}
    </button>
  );
}
