import React from 'react';
import { Star, Hash, Plus, Tag, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar({ onNewPost }) {
  const sections = [
    { icon: <TrendingUp size={16} />, label: 'В тренде', color: 'text-[#1F6FEB]' },
    { icon: <Star size={16} />, label: 'Избранное', color: 'text-[#7C3AED]' },
    { icon: <Hash size={16} />, label: 'Новые', color: 'text-[#10B981]' },
  ];

  const tags = ['JavaScript', 'React', 'Дизайн', 'DevOps', 'AI', 'Новости'];

  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-4 space-y-4">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNewPost}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F6FEB] px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#155CCD] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/30"
        >
          <Plus size={16} />
          Новая тема
        </motion.button>

        <nav className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
          <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-gray-500">Разделы</p>
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.label}>
                <a href="#" className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
                  <span className={s.color}>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
          <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-gray-500">Популярные теги</p>
          <div className="flex flex-wrap gap-2 px-2">
            {tags.map((t) => (
              <a
                key={t}
                href={`#/tags/${t.toLowerCase()}`}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 shadow-sm transition hover:border-[#1F6FEB] hover:text-[#1F6FEB]"
              >
                <Tag size={12} />
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
