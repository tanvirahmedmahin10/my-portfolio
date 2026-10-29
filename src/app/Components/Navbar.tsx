'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Project' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('#home');
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setOpen(false);
  };

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const offset = 140;
      let current = links[0].href;

      for (const { href } of links) {
        const section = document.querySelector<HTMLElement>(href);
        if (!section) continue;

        if (section.getBoundingClientRect().top - offset <= 0) {
          current = href;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = links[links.length - 1].href;

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    firstFocusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const desktopLinks = links.map(({ href, label }) => {
    const isActive = active === href;

    return (
      <li key={href}>
        <a
          href={href}
          aria-current={isActive ? 'page' : undefined}
          className={`block cursor-pointer rounded-lg px-2 py-2 text-sm transition-colors duration-200 xl:px-3 xl:text-base ${
            isActive
              ? 'bg-[#ff8a00]/15 font-semibold text-[#ff8a00]'
              : 'text-white/80 hover:bg-white/5 hover:text-white'
          }`}
        >
          {label}
        </a>
      </li>
    );
  });

  return (
    <div className="sticky top-0 z-50 w-full rounded-md bg-[#171B21] shadow-sm lg:mb-10">
      <nav className="container relative z-50 mx-auto flex items-center justify-between gap-2 p-2 sm:px-4">
        <div className="flex min-w-0 my-2 items-center gap-1 sm:gap-2">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="btn btn-ghost btn-sm shrink-0 lg:hidden"
          >
            {open ? (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>

          <Link href="/" className="min-w-0">
            <h2 className="truncate text-base font-semibold text-white sm:text-xl">
              Tanvir Ahmed Mahin
            </h2>
          </Link>
        </div>

        <ul className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2 lg:items-center lg:gap-0.5 xl:gap-1">
          {desktopLinks}
        </ul>

        <div className="hidden shrink-0 lg:block">
          <a
            href="#home"
            className="whitespace-nowrap rounded-lg bg-[#ff8a00] px-4 py-2.5 text-sm font-semibold text-black shadow-lg transition duration-200 hover:bg-[#ff9f24] xl:px-6 xl:py-3 xl:text-base"
          >
            Resume
          </a>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-[#0b0d11] px-5 pb-8 pt-20 sm:px-8 lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-md flex-col gap-2">
            {links.map(({ href, label }) => {
              const isActive = active === href;

              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-xl border px-5 py-4 text-lg font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-[#ff8a00]/40 bg-[#ff8a00]/10 text-[#ff8a00]'
                        : 'border-gray-800 bg-[#11151b] text-white/85 hover:border-gray-700 hover:text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}

            <li className="mt-4">
              <a
                href="#home"
                onClick={closeMenu}
                className="block rounded-xl bg-[#ff8a00] px-5 py-4 text-center text-lg font-semibold text-black transition-colors duration-200 hover:bg-[#ff9f24]"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
