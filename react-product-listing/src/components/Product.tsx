import React from 'react';

interface ProductProps {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    onAddToCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, title, price, thumbnail, onAddToCart }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                    <input
                        type="number"
                        defaultValue={1}
                        className="w-16 px-2 py-1 border rounded"
                    />
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => onAddToCart(id)} // Handle add to cart action
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
