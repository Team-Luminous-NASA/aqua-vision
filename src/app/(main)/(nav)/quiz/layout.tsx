export default function QuizRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full"> {children} </div>;
}
