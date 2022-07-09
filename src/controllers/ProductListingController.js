const ProductListingController = {
    index: (req, res) => {
        return res.render("productListing", {title: "Product Listing"});
    },
};

module.exports = ProductListingController;