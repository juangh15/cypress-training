class ShoppingCartPage {
    private checkoutItemInCartButton: string;
    private checkoutItemInSummaryButton: string;

    constructor() {
        this.checkoutItemInCartButton = "[style*=\"display: block;\"] .button-container > a";
        this.checkoutItemInSummaryButton = ".cart_navigation span";
    }

    public checkoutItemInCart(): void {
        cy.get(this.checkoutItemInCartButton).click();
    }

    public checkoutItemInSummary(): void {
        cy.get(this.checkoutItemInSummaryButton).click();
    }

}
export { ShoppingCartPage }