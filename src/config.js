import is from './utils/is';

const getBase = env =>
    `https://${is.empty(env) || ['selz.com', 'app.selz.com'].includes(env) ? 'app.selz.com/sdk' : `${env}/sdk`}/`;

const config = {
    urls: {
        /**
         * Get URL for product data by URL
         * @param {String} env - Environment (for internal use)
         * @param {String} url - Short or full URL for a product
         */
        product(env, url = '') {
            return `${getBase(env)}products/find?url=${url}`;
        },

        /**
         * Get URL for all products by store ID
         * @param {String} env - Environment (for internal use)
         * @param {Number|String} id - The store ID
         * @param {String} keyword - Search keyword
         * @param {ObjectId|String} category - Category ID or relative path
         * @param {Number} page - Page to fetch
         */
        products(env, id, keyword = '', category = '', page = 1) {
            return `${getBase(env)}products/all/${id}?q=${keyword}&c=${category}&p=${page}`;
        },

        /**
         * Get all categories for a given store ID
         * @param {String} env - Environment (for internal use)
         * @param {String} id - The store ID
         */
        categories(env, id) {
            return `${getBase(env)}categories/${id}`;
        },

        /**
         * Get URL for finding a store by URL or ID
         * @param {String} env - Environment (for internal use)
         * @param {Number|String} input - The ID or URL to lookup
         */
        store(env, input = null) {
            if (is.number(input)) {
                return `${getBase(env)}store/find/${input}`;
            }

            return `${getBase(env)}store/find?url=${input}`;
        },

        /**
         * Buy a product
         * @param {String} env - Environment (for internal use)
         */
        buy(env) {
            return `${getBase(env)}cart/buy`;
        },

        /**
         * Create a new cart
         * @param {String} env - Environment (for internal use)
         * @param {Number} id - Store ID
         */
        createCart(env, id = '') {
            return `${getBase(env)}cart/create/${id}`;
        },

        /**
         * Get cart from ID
         * @param {String} env - Environment (for internal use)
         * @param {String} id - Cart ID
         */
        getCart(env, id = '') {
            return `${getBase(env)}cart/${id}`;
        },

        /**
         * Check carts still exist server side
         * @param {String} env - Environment (for internal use)
         * @param {Number} id - Cart IDs
         */
        checkCarts(env, ids = '') {
            return `${getBase(env)}cart/verify?ids=${ids}`;
        },

        /**
         * Add product to cart
         * @param {String} env - Environment (for internal use)
         * @param {String} id - Cart ID
         */
        addToCart(env, id = '') {
            return `${getBase(env)}cart/add/${id}`;
        },

        /**
         * Update a cart item quantity
         * @param {String} env - Environment (for internal use)
         * @param {String} id - Cart ID
         */
        updateCartItemQuantity(env, id = '') {
            return `${getBase(env)}cart/updateitemquantity/${id}`;
        },

        /**
         * Remove product from cart
         * @param {String} env - Environment (for internal use)
         * @param {String} id - Cart ID
         */
        removeFromCart(env, id = '') {
            return `${getBase(env)}cart/remove/${id}`;
        },
    },
};

export default config;
