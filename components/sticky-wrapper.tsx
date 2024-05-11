type Props = {
  children: React.ReactNode;
};

const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="sticky top-0 hidden lg:block w-[368px] self-end bottom-6">
      <div className="min-h-[calc(100vh - 48px)] sticky top-6 flex flex-col gpa-y-4"></div>
      {children}
    </div>
  );
};

export default StickyWrapper;
