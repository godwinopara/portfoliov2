import * as React from "react";

const ListText = ({ textLists }) => {
  return (
    <ul className="flex my-5 text-light-blue-1">
      {textLists.map((textList) => {
        return <li className="text-sm mr-3 last:mr-0">{textList}</li>;
      })}
    </ul>
  );
};

export default ListText;

