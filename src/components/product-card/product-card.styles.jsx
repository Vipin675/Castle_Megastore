import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }

  @media screen and (max-width: 800px) {
    height: 16rem;
    button {
      min-width: unset;
      display: block;
      opacity: 0.9;
      padding: 0 1px;
      position: absolute;
      top: 260px;
      font-size: 0.1rem;
    }

    &:hover {
      img {
        opacity: unset;
      }

      .card-button {
        opacity: unset;
      }
    }

    .footer {
      font-size: 14px;
      .name {
        width: 90%;
        margin-bottom: 15px;
      }

      .price {
        width: 12%;
      }
    }
  }

  @media screen and (max-width: 380px) {
    height: 10rem;
    button {
      min-width: unset;
      display: block;
      opacity: 0.9;
      padding: 0;
      position: absolute;
      top: 130px;
      /* font-size: 0.1rem; */
    }
  }
`;
