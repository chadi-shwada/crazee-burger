import { styled } from "styled-components";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled className="product">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  background: red;
  width: 240px;
  height: 330px;
`;
