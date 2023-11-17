import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-[100vh]`}>
      <Navbar />
      {children}
    </div>
  );
}
