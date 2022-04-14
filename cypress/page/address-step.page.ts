class AddressStepPage {
    private checkoutItemInAddressButton: string;

    constructor() {
        this.checkoutItemInAddressButton = "p > .button.btn.btn-default.button-medium > span";
    }

    public checkoutItemInAddress(): void {
        cy.get(this.checkoutItemInAddressButton).click();
    }

}
export { AddressStepPage }