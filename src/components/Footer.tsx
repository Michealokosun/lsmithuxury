export const Footer = () => {
  const year = new Date();
  return (
    <div className="text-balance text-center bg-white p-5 text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      Code with 💖 by micheal okosun {year.getFullYear()}
    </div>
  );
};
