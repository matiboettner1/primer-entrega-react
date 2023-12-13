const products = [
    {
        id: '1',
        name: 'HyperX Alloy Origins',
        price: 120000,
        category: 'teclados',
        img: './img_ecommerce/teclado1.jpg',
        stock: 2,
        description: 'teclado hyperx 60% switches brown'
    },

    {
        id: '2',
        name: 'Skyloong Sk61',
        price: 130000,
        category: 'teclados',
        img: '/img_ecommerce/teclado2.jpg',
        stock: 4,
        description: 'teclado skyloong 60% switches yellow'
    },


    {
        id: '3',
        name: 'Razer Huntsman Mini',
        price: 200000,
        category: 'teclados',
        img: '/img_ecommerce/teclado3.jpg',
        stock: 1,
        description: 'teclado razer 60% switches red'
    },

    {
        id: '4',
        name: 'Logitech G Pro X Superlight',
        price: 110000,
        category: 'mouses',
        img: '/img_ecommerce/mouse1.jpg',
        stock: 6,
        description: 'mouse inalambrico logitech'
    },

    {
        id: '5',
        name: 'Razer Viper Ultimate',
        price: 160000,
        category: 'mouses',
        img: '/img_ecommerce/mouse2.jpg',
        stock: 3,
        description: 'mouse inalambrico razer'
    },

    {
        id: '6',
        name: 'HyperX Pulsefire Haste',
        price: 12000,
        category: 'mouses',
        img: '/img_ecommerce/mouse3.jpg',
        stock: 5,
        description: 'mouse inalambrico hyperx ultraligero'
    },

    {
        id: '7',
        name: 'Magic By Zeko V2',
        price: 20000,
        category: 'mousepads',
        img: '/img_ecommerce/mousepad1.jpg',
        stock: 25,
        description: 'mousepad magic by zeko v2 42x42cm'
    },

    {
        id: '8',
        name: 'Esport Tiger Longteng Huoyun',
        price: 70000,
        category: 'mousepads',
        img: '/img_ecommerce/mousepad2.jpg',
        stock: 1,
        description: 'mousepad esports tiger longteng huoyun special edition 48x40cm'
    },

    {
        id: '9',
        name: 'SkyPAD Glasspad Black Cloud',
        price: 90000,
        category: 'mousepads',
        img: '/img_ecommerce/mousepad3.jpg',
        stock: 2,
        description: 'mousepad skyPAD de vidrio 40x50cm'
    }
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}