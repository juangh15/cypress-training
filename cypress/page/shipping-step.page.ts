class ShippingStepPage {
    private termsAgreeCheckbox: string;
    private checkoutItemInShippingButton: string;

    constructor() {
        this.termsAgreeCheckbox = "#form > .order_carrier_content.box > .checkbox > .checker > span";
        this.checkoutItemInShippingButton = "p > .button.btn.btn-default.standard-checkout.button-medium > span";
    }

    public agreeWithTerms(): void {
        cy.get(this.termsAgreeCheckbox).click();
    }

    public checkoutItemInShipping(): void {
        cy.get(this.checkoutItemInShippingButton).click();
    }

}
export { ShippingStepPage }