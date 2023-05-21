import { createContext, useState, useEffect } from "react";
import { GraphQLClient, gql } from 'graphql-request'


export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
    const [res, setRes] = useState([])

    useEffect(() => {
        const API = 'https://api-ca-central-1.hygraph.com/v2/cle1yz6et3z1m01rraj6jbs00/master'
        const graphcms = new GraphQLClient(API);
        const query = gql`
        query MyQuery {
            items {
              coverPhoto{
                url
              }
              productPhoto{
                url
              }
              category
              id
              itemDescription
              itemName
              itemPrice
              createdAt
            }
          }`
        async function getAllitems() {
            await graphcms.request(query)
                .then(function (response) {
                    setRes(response.items);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getAllitems()
    }, [])
    console.log(res)
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [basket, setBasket] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const values = { product, setProduct, count, setCount, basket, setBasket, searchTerm, setSearchTerm, res }
    
    return (
        <>
            <ProductContext.Provider value={values}>
                {children}
            </ProductContext.Provider>
        </>
    )

}

