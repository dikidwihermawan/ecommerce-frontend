import React, { useEffect, useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import Slider from '../../components/Slider';
import { NavLink } from 'react-router-dom';

export default function Product({ keyword }) {
    console.log(keyword);
    // keyword.onkeyup = function () {
    //     var filter = input.value.toUpperCase();
    //     var lis = document.getElementsByTagName('li');
    //     for (var i = 0; i < lis.length; i++) {
    //         var name = lis[i].innerText;
    //         if (name.toUpperCase().indexOf(filter) == 0) lis[i].style.display = 'list-item';
    //         else lis[i].style.display = 'none';
    //     }
    // };
    const [products, setProducts] = useState([]);
    const [addCart, setAddCart] = useState([]);
    const [showCart, setShowCart] = useState('hidden');

    const getDataProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=18');
        const myData = await response.json();
        const product = myData.slice();

        const addQty = product.map((p) => {
            return {
                ...p,
                quantity: 10,
                order_quantity: 0,
            };
        });
        setProducts(addQty);
    };

    useEffect(() => {
        getDataProduct();
    }, []);

    const handleShowCart = async () => {
        setShowCart(showCart == 'hidden' ? '' : 'hidden');
    };

    return (
        <div>
            <Slider />
            <div className='px-4 py-2 lg:px-16 lg:py-4'>
                <div className='shadow-lg'>
                    {products.length > 0 ? (
                        <ol className='grid gap-x-4 gap-y-2 lg:grid-cols-6 md:grid-cols-4 grid-cols-2' id='listProduct'>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <NavLink
                                        to={{
                                            pathname: '/cart',
                                        }}
                                        state={{ id: product.id }}>
                                        <div className='w-50 h-50 py-4 rounded-lg overflow-hidden shadow-xl bg-white '>
                                            <div className='pb-4'>
                                                <img className='w-16 h-16 mx-auto ' src={product.image} alt={product.category} />
                                            </div>
                                            <div className='px-4 py-4'>
                                                <div className='font-bold text-xs mb-2 h-16 leading-relaxed'>{product.title.length < 70 ? product.title : product.title.substring(0, 60) + ' ...'}</div>
                                            </div>
                                            <div className='flex justify-between px-4'>
                                                <div className='text-xs text-green-600'>$ {product.price}</div>
                                                <div className='text-xs text-gray-600'>1,2RB Terjual</div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ol>
                    ) : null}
                    <div className='flex items-center gap-x-4'>
                        <div className={`${showCart} fixed z-90 bottom-8 right-20 overflow-auto bg-white h-96 scale-100 border border-grey-300 shadow rounded-md p-4 max-w-sm w-full mx-auto`}>
                            {addCart.length > 0 ? (
                                <ul className='space-y-6'>
                                    {addCart.map((cart) => (
                                        <li key={cart.cart_id} className='flex space-x-4'>
                                            <img className='rounded-full bg-slate-200 h-10 w-10' src={cart.image} alt={cart.title} />
                                            <div className='flex-1 space-y-6 py-1'>
                                                <div className='h-6 text-sm rounded'>{cart.title}</div>
                                                <div className='space-y-6'>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='h-6 text-xs col-span-2'>
                                                            $ {cart.price} x {cart.qty} = $ ({cart.price * cart.qty})
                                                        </div>
                                                        <button className='col-span-1 px-2 py-1 bg-red-600 text-white rounded-full text-xs'>x</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                'Belum ada cart'
                            )}
                        </div>

                        <button
                            onClick={handleShowCart}
                            title='Carts'
                            className='fixed z-90 bottom-8 right-8 bg-green-600 rounded-full w-12 h-12 drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl'>
                            <IconShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
