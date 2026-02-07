import BackButton from "@/components/BackButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton className="bg-secondary mt-10" />
      <div>{children}</div>
    </>
  );
}
