interface PageTitleProps {
  pageTitle: string;
}

const PageTitle = ({ pageTitle }: PageTitleProps) => {
  return (
    <div className="mb-5">
      <h1 className="text-4xl text-center">{pageTitle}</h1>
    </div>
  );
};

export default PageTitle;
