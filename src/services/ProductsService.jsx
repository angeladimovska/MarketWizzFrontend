import axiosInstance from "../axsiosConfig";

export const ProductsService = (page) => {

    const getProducts = async () => {
        return await axiosInstance.get('/products/get');
    }

    const getProductById = async (id) => {
        return await axiosInstance.get('/product/?productId=' + id);
    }

    const createProduct = async (product) => {
        console.log('product', product)
        return await axiosInstance.post('/product/create', product, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            },
        });
    }
    //plus i update

    return {
        getProducts,
        getProductById,
        createProduct,
    }

}