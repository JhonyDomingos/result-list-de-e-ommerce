interface IResultInfoProps {
  start: number;
  end: number;
  total: number;
  classname?: string;
}

export const ResultInfo = ({
  start,
  end,
  total,
  classname,
}: IResultInfoProps) => {
  return (
    <div className={classname}>
      <p>
        Showing <span> {start} - {end}</span> of {total} results
      </p>
    </div>
  );
};
