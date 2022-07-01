const Header = (props) => {
    const {title, subtitle} = props
    return (
        <div className= 'container mx-auto p-8'>
          <h2 className='text-indigo-600 text-center uppercase font-bold'>
            {subtitle}
          </h2>
          <h1 className = 'font-black text-6xl text-center'>
            {title}
          </h1>
        </div>
      )
    }

    export default Header;
