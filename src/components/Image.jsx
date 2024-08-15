const Image = ({ratio = "aspect-16x9", imgSrc, objectFit = "object-cover", text}) => {
    return (
        <>
            <img className={`relative ${objectFit} ${ratio} ${text ? 'bg-gray-300' : ''}`} src={imgSrc} />

            {text ?
            <>
                <div className="absolute inset-0 bg-gray-500 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">{text}</h2>
                </div>
            </>
            : ''}
        </>
    )
}

export default Image