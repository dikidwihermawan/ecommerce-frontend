import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Cart() {
    const location = useLocation();
    const { state } = location;

    const [products, setProducts] = useState([]);
    const [getColor, setColor] = useState([]);
    const [getSize, setSize] = useState([]);
    const [getAddress, setAddress] = useState([]);

    const getDataProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products/' + state.id);
        const product = await response.json();
        setProducts(product);
    };

    const [productColor, setProductColor] = useState([
        { id: Math.floor(Math.random(2) * Date.now()), color: 'Black + Blue', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), color: 'Black', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), color: 'Navy', active: false },
    ]);
    const [productSize, setProductSize] = useState([
        { id: Math.floor(Math.random(2) * Date.now()), size: 'XXL', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), size: 'XL', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), size: 'L', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), size: 'M', active: false },
        { id: Math.floor(Math.random(2) * Date.now()), size: 'S', active: false },
    ]);
    const [delivery, setDelivery] = useState([
        { code: 'tng', name: 'Tangerang' },
        { code: 'bdg', name: 'Bandung' },
        { code: 'jkt', name: 'Jakarta' },
        { code: 'bntn', name: 'Banten' },
    ]);
    const [stock, setStock] = useState(1);

    const handleQty = (qty) => {
        if (qty == 'max') {
            setStock((e) => e + 1);
        } else if (qty == 'min' && stock > 1) {
            setStock((e) => e - 1);
        } else {
            setStock(1);
        }
    };

    const handleAddColor = (colorId) => {
        const updateColor = productColor.map((color) => {
            if (color.id === colorId && color.active == false) {
                color.active = true;
                setColor(color.color);
            } else {
                color.active = false;
            }
            return color;
        });

        setProductColor(updateColor);
    };
    const handleProductSize = (sizeId) => {
        const updateSize = productSize.map((size) => {
            if (size.id === sizeId && size.active == false) {
                size.active = true;
                setSize(size.size);
            } else {
                size.active = false;
            }
            return size;
        });

        setProductSize(updateSize);
    };

    const store = (e) => {
        const data = { getColor, getSize, getAddress, stock };
        e.preventDefault();
        console.log(data);
    };

    useEffect(() => {
        getDataProduct();
    }, []);

    return (
        <div className='px-16 py-4'>
            <form onSubmit={store}>
                <div className='grid grid-cols-4 gap-4 px-4 py-4 bg-white'>
                    <div className='grid grid-cols-1 h-[400px]'>
                        <div className='col-span-1 h-[250px] flex place-content-center p-4'>
                            <img src={products['image']} className='object-fit' />
                        </div>
                        <div className='flex justify-center space-x-4 m-2'>
                            <img src={products['image']} className='border border-orange-300 h-[50px] w-[50px] p-1 rounded' />
                            <img src={products['image']} className='h-[50px] w-[50px] p-1 rounded' />
                            <img src={products['image']} className='h-[50px] w-[50px] p-1 rounded' />
                            <img src={products['image']} className='h-[50px] w-[50px] p-1 rounded' />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='gap-4'>
                            <div className='col-span-3 text-2xl font-semibold'>{products['title']}</div>
                        </div>
                        <div className='gap-4 my-4'>
                            <div className='flex items-center space-x-1'>
                                <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                </svg>
                                <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                </svg>
                                <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                </svg>
                                <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                </svg>
                                <svg className='w-4 h-4 text-gray-300 dark:text-gray-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                </svg>
                            </div>
                        </div>
                        <div className='my-8'>
                            <div className='col-span-3 text-sm text-gray-600'>{products['description']}</div>
                        </div>
                        <div className='my-8'>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Colors : </label>
                            <div className='flex items-center space-x-4'>
                                {productColor.map((product) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                handleAddColor(product.id);
                                            }}
                                            key={product.id}
                                            className={`border px-4 py-2 rounded-xl text-sm ${product.active ? ' border-orange-400' : ''}`}>
                                            {product.color}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='my-8'>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Size : </label>
                            <div className='flex items-center space-x-4'>
                                {productSize.map((size) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                handleProductSize(size.id);
                                            }}
                                            key={size.id}
                                            id={size.id}
                                            className={`border px-4 py-2 rounded-xl text-sm ${size.active ? 'border-orange-400' : ''}`}>
                                            {size.size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='my-8'>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>About Product : </label>
                            <div className='col-span-3 text-sm text-gray-600'>{products['description']}</div>
                        </div>
                    </div>
                    <div className='col-span-1 rounded-xl border border-gray-200 p-4 h-[400px]'>
                        <div className='pb-2'>
                            <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Deliver
                            </label>
                            <select
                                onClick={(e) => {
                                    setAddress(e.target.value);
                                }}
                                defaultValue={'tng'}
                                name='city'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                {delivery.map((deliv, index) => {
                                    return (
                                        <option key={index} value={deliv.code}>
                                            {deliv.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='py-2'>
                            <label htmlFor='qty' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Total Stock
                            </label>
                            <div className='flex items-center space-x-4 justify-between border border-gray-300 rounded-lg'>
                                <button
                                    onClick={() => {
                                        handleQty('min');
                                    }}
                                    className='border bg-slate-200 px-4 py-2 rounded-l-lg text-sm'>
                                    -
                                </button>
                                <span className='text-sm'>{stock}</span>
                                <button
                                    onClick={() => {
                                        handleQty('max');
                                    }}
                                    className='border bg-orange-500 px-4 py-2 rounded-r-lg text-sm text-white'>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='py-2 flex justify-between'>
                            <span className='text-gray-500'>Price</span>
                            <span className='font-bold'>$100,79</span>
                        </div>
                        <div className='py-2 flex justify-between'>
                            <span className='text-gray-500'>Shipping</span>
                            <span className='font-bold'>$10</span>
                        </div>
                        <div className='py-2'>
                            <button className='w-full px-4 py-3 rounded-md bg-orange-500 border border-orange-600 text-white text-xs font-bold'>Add To Cart</button>
                        </div>
                        <div className='py-2'>
                            <button type='submit' className='w-full px-4 py-3 rounded-md border border-orange-600 text-orange-500 text-xs font-bold'>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
