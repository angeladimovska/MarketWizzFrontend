import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

export const HomePage = () => {
    return (
        <Container>
            TEST
            <div className="container">
                <h2>Featured Products</h2>
                <div className="product">
                    <img src="product1.jpg" alt="Product 1"/>
                    <h3>Product 1</h3>
                    <p>Price: $19.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src="product2.jpg" alt="Product 2"/>
                    <h3>Product 2</h3>
                    <p>Price: $29.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src="product3.jpg" alt="Product 3"/>
                    <h3>Product 3</h3>
                    <p>Price: $39.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src="product3.jpg" alt="Product 3"/>
                    <h3>Product 3</h3>
                    <p>Price: $39.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>

        </Container>
    )
}