interface NextIconArrowProps {
    color: string,
    onClick: any,
    padding?: string
}

export const NextIcon = (props: NextIconArrowProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} height="24px" style={{cursor:'pointer', padding:props.padding}} viewBox="0 -960 960 960" width="24px" fill={props.color}><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
)

