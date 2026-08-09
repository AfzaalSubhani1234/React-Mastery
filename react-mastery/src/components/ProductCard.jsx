function ProductCard({ name, company, price, category }) {
    return (
        <>
            <h1>Name: {name}</h1>
            <h1>Company: {company}</h1>
            <h1>Price: {price}</h1>
            <h1>Category: {category}</h1>
        </>
    )
}

export default ProductCard