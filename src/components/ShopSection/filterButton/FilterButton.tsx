import { Button, IButtonProps } from "../../Buttons/defaultButtons/buttons";

interface IFilterButtonProps {
  icon: string;
  classname?: string;
  props?: IButtonProps

}

export const FilterButton = ({ props, icon, classname }: IFilterButtonProps) => {
  return (
    <div className={classname}>
      <Button {...props}>
        <img src={icon} alt="Filter Icon" />
      </Button>
      <p>Filter</p>
    </div>
  );
};
