import Icon from "./Icons";

const Button = ({ isLink, type = "primary", text, urlTarget = '#', iconName, iconWidth = 20, onClick, btnWidth = "w-auto", isPill}) => {
    let btnStyle = `flex gap-2 items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium focus:ring-4 focus:ring-blue-300 transition-all ease-linear ${btnWidth} ${isPill ? 'rounded-full ' : ''}`;
    switch (type) {
        case "primary":
        btnStyle += "bg-slate-900 text-white hover:bg-gray-700 focus:outline-none";
        case "outline":
        btnStyle += 'hover:bg-gray-300 border border-slate-900 text-slate-900';
    }

    return (
        <>
            {isLink ? (
                <a href={urlTarget} className={btnStyle}>
                    {iconName &&
                        <span>
                            <Icon name={iconName} width={iconWidth} />
                        </span>
                    }
                    {text}
                </a>
            ) : (
                <button onClick={onClick} className={btnStyle}>
                    {iconName &&
                        <span>
                            <Icon name={iconName} width={iconWidth} />
                        </span>
                    }
                    {text}
                </button>
            )}
        </>
    )
}

export default Button