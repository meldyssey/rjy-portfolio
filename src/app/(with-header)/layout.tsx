import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6">{children}</main>
    </>
  );
}
