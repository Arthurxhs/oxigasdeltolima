import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Card(props: Props) {
    const { children } = props

    return (
        <div className="card" style={{
            width: "400px"
        }}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

interface CardBodyProps {
    title: string;
    text?: string;
    btn?: string;
}

export function CardBody(props: CardBodyProps) {
    const {title, text, btn} = props;

    return (
        <>
            <h5 className="card-title">{title}</h5>  
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">{btn}</a>
        </>
    )
}

export default Card;