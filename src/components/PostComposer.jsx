import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Link as LinkIcon, Bold, Italic, Strikethrough, Underline, Code, List, ListOrdered, Eye } from 'lucide-react';

export default function PostComposer({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [preview, setPreview] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.key === 'n' || e.key === 'N') && !e.target.closest('input, textarea')) {
        e.preventDefault();
        wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'enter') {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) return;
    onSubmit?.({ title, body });
    setTitle('');
    setBody('');
    setPreview(false);
  };

  return (
    <section ref={wrapperRef} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Создать тему</h2>
      <div className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок (обязательно)"
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1F6FEB] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
        />

        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 p-2">
          <ToolbarButton label="Полужирный"><Bold size={16} /></ToolbarButton>
          <ToolbarButton label="Курсив"><Italic size={16} /></ToolbarButton>
          <ToolbarButton label="Подчёркнутый"><Underline size={16} /></ToolbarButton>
          <ToolbarButton label="Зачёркнутый"><Strikethrough size={16} /></ToolbarButton>
          <ToolbarButton label="Код"><Code size={16} /></ToolbarButton>
          <ToolbarButton label="Список"><List size={16} /></ToolbarButton>
          <ToolbarButton label="Нумерованный список"><ListOrdered size={16} /></ToolbarButton>
          <div className="mx-2 h-5 w-px bg-gray-200" />
          <ToolbarButton label="Вставить изображение"><ImageIcon size={16} /></ToolbarButton>
          <ToolbarButton label="Ссылка"><LinkIcon size={16} /></ToolbarButton>
          <div className="flex-1" />
          <button
            onClick={() => setPreview((v) => !v)}
            className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs transition ${preview ? 'bg-[#1F6FEB] text-white' : 'text-gray-700 hover:bg-white'}`}
          >
            <Eye size={14} /> Предпросмотр
          </button>
        </div>

        {!preview ? (
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder="Текст сообщения (поддержка Markdown в демо ограничена)"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1F6FEB] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose prose-sm max-w-none rounded-lg border border-gray-200 bg-white p-3"
          >
            <p className="text-gray-800">{body || 'Нет содержимого для предпросмотра.'}</p>
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">Подсказка: Ctrl/⌘ + Enter — отправить</p>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!title.trim() || !body.trim()}
            className="inline-flex items-center justify-center rounded-lg bg-[#1F6FEB] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#155CCD] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Опубликовать
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ToolbarButton({ children, label }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className="rounded-md p-1.5 text-gray-700 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
    >
      <span className="sr-only">{label}</span>
      {children}
    </button>
  );
}
