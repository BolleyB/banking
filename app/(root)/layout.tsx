import Sidebar from "@/components/ui/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Hugo', lastName: 'Webster'}
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      <div className="flex size-full">

      </div>
      {children}  
    </main>
  );
}
