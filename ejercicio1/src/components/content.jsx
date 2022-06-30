const Content = ({courseInfo}) => {
    return (
        <div>
            {courseInfo.map(info => (
                <p>{info.part} {info.exercises}</p>
            ))}
        </div>
    )
}

export default Content