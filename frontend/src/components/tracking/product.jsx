const Product = ({ product }) => {
    return (
        <div className="w-full mb-2">
            <div className="flex">
                <img
                    src={product.img}
                    alt={product.title}
                    className="w-[100px] h-[100px] object-cover rounded-[24px] mr-4"
                />
                <div>
                    <h2 className="font-lato text-[#222E3D] font-bold text-[12px]">
                        {product.title}
                    </h2>
                    <p className="text-[#B1B1B1] font-normal text-[12px]">
                        {product.description}
                    </p>
                    <p className="text-[12px] text-[#B1B1B1]">
                        Product:{" "}
                        <a
                            className="text-[#59A1FF]"
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {product.name}
                        </a>
                    </p>
                </div>
            </div>
            <hr className="mt-2 border-[#EAEAEA]" />
        </div>
    );
};

export default Product;
