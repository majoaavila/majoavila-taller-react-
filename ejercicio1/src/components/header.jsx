const Header = (props) => {
    return (
    <h1>{props.title}</h1>
    )
}

//es lo mismo a
// const Header = (props) => {
//     const {title, name, age} = props
//     return (
//         <h1>{title}</h1>
//     )
// }

export default Header