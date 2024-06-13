import { Button } from "../../Buttons/defaultButtons/buttons";

interface IFilterButtonProps {
  icon: string;
  classname?: string;
}

export const FilterButton = ({ icon, classname }: IFilterButtonProps) => {
  return (
    <div className={classname}>
      <Button>
        <img src={icon} alt="Filter Icon" />
      </Button>
      <p>Filter</p>
    </div>
  );
};
