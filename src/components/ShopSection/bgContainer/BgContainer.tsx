interface IBgContainerProps {
  background: string;
  classname?: string;
}

export const BgContainer = ({ background, classname }: IBgContainerProps) => {
  return (
    <figure className={classname}>
      <img src={background} alt="Background" />
    </figure>
  );
};
