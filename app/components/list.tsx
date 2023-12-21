import * as React from "react";
import Image from "next/image";

interface ListProps extends React.OlHTMLAttributes<HTMLOListElement> {}

export function List(props: ListProps) {
  return <ol className="flex flex-col gap-36">{props.children}</ol>;
}

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  date: string;
  logo: string;
  alt: string;
  jobTitle: () => JSX.Element;
}

export function ListItem({ ...props }: ListItemProps) {
  return (
    <li className="flex flex-col-reverse items-center w-full lg:flex-row lg:items-start gap-8 justify-between">
      <div className="flex flex-1 flex-col justify-center gap-4 items-center lg:items-start">
        <span className="text-gray-600 text-sm font-light tracking-wider">
          {props.date}
        </span>
        <div className="flex flex-col items-center lg:items-start">
          {props.jobTitle()}
        </div>
      </div>
      <div className="flex w-96 justify-center items-center">
        <Image src={props.logo} alt={props.alt} width={250} height={90} />
      </div>
    </li>
  );
}
