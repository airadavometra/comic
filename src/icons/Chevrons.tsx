import { WithClassName } from "@/types/withClassName";

export const Chevrons = ({ className }: WithClassName) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  );
};