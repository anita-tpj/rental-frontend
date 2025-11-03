interface Subtitle {
  subTitle: string;
  className?: string;
}

const SubTitle = ({ subTitle }: Subtitle) => {
  return <h2 className="text-2xl mb-4">{subTitle}</h2>;
};

export default SubTitle;
