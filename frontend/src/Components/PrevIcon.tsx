interface PrevIconArrowProps {
    color: string,
    onClick: any,
    padding?: string
}

export const PrevIcon = (props: PrevIconArrowProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} height="24px" style={{cursor:'pointer', padding:props.padding}} viewBox="0 -960 960 960" width="24px" fill={props.color}><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
)