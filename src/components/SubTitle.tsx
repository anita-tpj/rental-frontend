interface Subtitle {
  subTitle: string;
  className?: string;
}

const SubTitle = ({ subTitle }: Subtitle) => {
  return <h2 className="text-2xl mb-2">{subTitle}</h2>;
};

export default SubTitle;
