export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-16 py-20">
      <button>Home</button>
      {children}
    </main>
  );
}
