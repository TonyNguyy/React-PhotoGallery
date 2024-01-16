import { SVGProps } from "react";

const CheckboxIcon = ({ width = "24", ...props }: SVGProps<SVGSVGElement>) => {
  const height: number = (Number(width) * 24) / 24;

  return (
    <svg
      width={width}
      height={height.toString()}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
      </g>
    </svg>
  );
};

export default CheckboxIcon;
