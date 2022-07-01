const Card = (props) => {
    const {id, image, name, species, status} = props.char

    return (       
            <div key={id} className='max-w-lg w-full'>
                <img src={image} alt={name} />
                <p className="font-bold text-lg py-4">
                    {name}
                </p>
                <span className="bg-stone-100 px-4 py-2 rounded-lg mr-4">
                    {species}
                </span>
                <span className="bg-stone-100 px-4 py-2 rounded-lg mr-4">
                    {status}
                </span>
            </div>   
        )
    }

    export default Card