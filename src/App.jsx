import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostComposer from './components/PostComposer';
import Feed from './components/Feed';

export default function App() {
  const [showComposerHint, setShowComposerHint] = React.useState(false);

  const handleNewPost = () => {
    setShowComposerHint(true);
    setTimeout(() => setShowComposerHint(false), 1500);
  };

  const handleSubmitPost = (data) => {
    // В реальном приложении здесь будет запрос к API
    alert(`Черновик отправлен (демо):\n\nЗаголовок: ${data.title}\nТекст: ${data.body.substring(0, 120)}…`);
  };

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-gray-900">
      <Header onSearchFocus={() => {}} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[18rem_1fr]">
          <Sidebar onNewPost={handleNewPost} />

          <div className="space-y-6">
            <div className="relative">
              <AnimatePresence>
                {showComposerHint && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-5 left-2 z-10 rounded-md bg-[#1F6FEB] px-2 py-1 text-xs text-white shadow"
                  >
                    Откройте редактор ниже
                  </motion.div>
                )}
              </AnimatePresence>
              <PostComposer onSubmit={handleSubmitPost} />
            </div>

            <section>
              <div className="mb-3 flex items-end justify-between">
                <h2 className="text-xl font-semibold">Лента</h2>
                <div className="text-sm text-gray-500">Сортировка: актуальные</div>
              </div>
              <Feed />
            </section>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-2 text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>
          Сделано как демо-интерфейс. Полный функционал (регистрация, публикация, комментарии, модерация, поиск, уведомления) будет добавлен при подключении сервера и базы данных.
        </p>
      </footer>
    </div>
  );
}
