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
    <li className={`flex gap-8 justify-between`}>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <span className="text-gray-600 text-sm font-light tracking-wider">
          {props.date}
        </span>
        <div className="flex flex-col">{props.jobTitle()}</div>
      </div>
      <div className="flex w-96 justify-center items-center">
        <img src={props.logo} alt={props.alt} />
      </div>
    </li>
  );
}
