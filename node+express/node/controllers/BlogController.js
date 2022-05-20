import axios from "axios";

export const getItems = async (req, res) => {
  try {
    var products = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${req.params.searchProduct}`
    );

    let productItems = [];
    for (let p of products.data.results) {
      productItems = [
        ...productItems,
        {
          id: p.id,
          title: p.title,
          price: {
            currency: p.currency_id,
            amount: p.price,
          },
          picture: p.thumbnail,
          condition: p.condition,
          freeShipping: p.shipping.free_shipping,
          stateName: p.address.state_name,
        },
      ];
    }
    const productParse = {
      author: {
        name: "Leonardo",
        lastName: "Villanueva",
      },
      categories: products.data.filters,
      items: productItems,
    };
    res.json(productParse);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const product = await axios.get(
      `https://api.mercadolibre.com/items/${req.params.id}`
    );
    const productParse = {
      author: {
        name: "Leonardo",
        lastName: "Villanueva",
      },

      item: {
        id: product.data.id,
        title: product.data.title,
        price: {
          currency: product.data.currency_id,
          amount: product.data.price,
        },
        picture: product.data.thumbnail,
        condition: product.data.condition,
        freeShipping: product.data.shipping.free_shipping,
        soldQuantity: product.data.sold_quantity,
        description: "",
      },
    };
    res.json(productParse);
  } catch (error) {
    res.json({ message: error.message });
  }
};
