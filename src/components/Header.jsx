import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, Bell, User, Settings, Search } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Header({ onSearchFocus }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      inputRef.current?.focus();
      onSearchFocus?.();
    }
  };

  return (
    <header className="relative overflow-hidden bg-[#FBFCFE]">
      <div className="relative">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4uBqgM2g9muhx3f4/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
        </div>

        <div
          className="relative z-10 mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8"
          onKeyDown={handleKeyDown}
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F6FEB] text-white shadow-md">
              <Home size={20} />
            </div>
            <div>
              <p className="font-semibold leading-tight text-gray-900">Форум</p>
              <p className="text-xs text-gray-500">Доброжелательное сообщество</p>
            </div>
          </motion.div>

          <div className="flex-1" />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="relative w-full max-w-xl"
          >
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              ref={inputRef}
              type="search"
              placeholder="Поиск по темам, авторам и тегам… (нажмите /)"
              className="w-full rounded-xl border border-gray-200 bg-white/90 pl-9 pr-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-[#1F6FEB] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
            />
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex items-center gap-2"
            aria-label="Главная навигация"
          >
            <HeaderButton label="Уведомления"><Bell size={18} /></HeaderButton>
            <HeaderButton label="Профиль"><User size={18} /></HeaderButton>
            <HeaderButton label="Настройки"><Settings size={18} /></HeaderButton>
            <a
              href="#login"
              className="ml-2 rounded-lg bg-[#1F6FEB] px-3 py-2 text-sm font-medium text-white shadow-md transition duration-150 hover:-translate-y-0.5 hover:bg-[#155CCD] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/30"
            >
              Войти
            </a>
            <a
              href="#register"
              className="rounded-lg border border-[#1F6FEB] px-3 py-2 text-sm font-medium text-[#1F6FEB] shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-[#1F6FEB]/5 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
            >
              Регистрация
            </a>
          </motion.nav>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-gray-100 bg-white/80 p-4 text-sm text-gray-600 shadow-sm backdrop-blur"
          >
            Совет: нажмите N, чтобы создать новую тему. Реальные данные появятся после подключения бэкенда.
          </motion.div>
        </div>
      </div>
    </header>
  );
}

function HeaderButton({ children, label }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className="group rounded-lg border border-gray-200 bg-white p-2 text-gray-600 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-[#1F6FEB] hover:text-[#1F6FEB] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]/20"
    >
      <span className="sr-only">{label}</span>
      <span className="inline-flex items-center justify-center">{children}</span>
    </button>
  );
}
