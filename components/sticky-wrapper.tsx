type Props = {
  children: React.ReactNode;
};

const StickyWrapper = ({ children }: Props) => {
  return <div className="sticky top-0">{children}</div>;
};
