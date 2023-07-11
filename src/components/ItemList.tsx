import React, { FC } from "react";

interface ItemListProps {
  title: string;
  items: string[];
  entityName?: string;
}

const ItemList: FC<ItemListProps> = ({ title, items, entityName }) => {
  const hasEntityName =
    typeof entityName !== "undefined" && typeof entityName === "string";

  return (
    <div>
      {hasEntityName ? (
        <h6 className="font-bold mb-5">{title}</h6>
      ) : (
        <h3 className="text-3xl mb-5">{title}</h3>
      )}
      <ul>
        {items.map((t, i) => (
          <li
            className={`font-poppins font-normal mb-4 ${entityName && "ml-4"}`}
            key={`${i}_${hasEntityName ? entityName : t}`}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
