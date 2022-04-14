class ProductsListPage {
    private addToCartButton: string;

    constructor() {
        this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    }

    public addItemToCart(): void {
        cy.get(this.addToCartButton).click();
    }

}
export { ProductsListPage }