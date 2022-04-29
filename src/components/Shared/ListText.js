import * as React from "react";

const ListText = ({ textLists }) => {
  return (
    <ul className="flex my-5 text-light-blue-1">
      {textLists.map((textList, id) => {
        return (
          <li key={id} className="text-sm mr-2 last:mr-0">
            {textList}
          </li>
        );
      })}
    </ul>
  );
};

export default ListText;

