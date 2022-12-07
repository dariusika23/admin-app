export const Card = (props: {id?: string, className?: string, children?: any}) => {
    return (
        <>
            <div className={props.className} id={props.id}>
                <div className="card">
                    <div className="card-body p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}