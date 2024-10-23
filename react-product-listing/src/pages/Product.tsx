import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api'; // Adjust the import path if necessary
import Product from '../components/Product'; // Adjust the import path if necessary

interface ProductData {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleAddToCart = (id: number) => {
        console.log(`Product ${id} added to cart`);
        // Implement the logic to add the product to the cart
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const LoadingPlaceholder = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(16)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg animate-pulse">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
                        <div className="h-4 bg-gray-300 mb-2 rounded w-1/2"></div>
                        <div className="h-6 bg-blue-500 rounded text-white text-center">Loading...</div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-6">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearch}
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full"
            />

            {loading ? (
                <LoadingPlaceholder />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                thumbnail={product.thumbnail}
                                onAddToCart={handleAddToCart}
                            />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductPage;
