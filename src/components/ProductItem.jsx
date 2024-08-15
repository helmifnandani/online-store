import Button from "./Button";

const ProductItem = ({item}) => {
    return (
        <div className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md mx-4 h-full">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 h-full w-full object-cover" src={item.img_src_1} alt="product image" />
                <img className="peer absolute top-0 h-full w-full object-cover transition-all delay-100 duration-300 hover:opacity-0 peer-hover:opacity-0" src={item.img_src_2} alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5 flex justify-between flex-col flex-grow">
                <div>
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{item.product_name}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex flex-col justify-between">
                        <p className="text-3xl font-bold text-slate-900">
                            Rp {new Intl.NumberFormat().format(item.price)}
                        </p>
                        {item.discount > 0 &&
                            <p className="text-sm text-red-600 line-through">
                                Rp {new Intl.NumberFormat().format(item.discount - item.price)}
                            </p>
                        }
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button isLink={true} type={"outline"} iconName={"heart"} iconColor = {'#000'} iconWidth = {20} />
                    <Button type={"primary"} text={"View More"} urlTarget = {'#'} iconName={"eye"} iconColor = {'#fff'} iconWidth = {20} btnWidth={"w-full"} />
                </div>
            </div>
        </div>
    );
}

export default ProductItem

