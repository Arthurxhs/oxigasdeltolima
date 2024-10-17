import { MouseEvent } from "react";

interface ListProps {
    data: string[];
}

export function List({ data }: ListProps) {
    const handClick = (e: MouseEvent)=>  {console.log(e)
    }

    return (
        <ul className="list-group">
            {data.map((elemento) => (
                <li onClick={handClick} key={elemento} className="list-group-item">{elemento}</li>
            ))}
        </ul>
    );
}