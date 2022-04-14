class PaymentStepPage {
    private payByBankWireButton: string;
    private confirmOrderButton: string;
    private orderCompleteText: string;

    constructor() {
        this.payByBankWireButton = ".payment_module > .bankwire > span";
        this.confirmOrderButton = ".cart_navigation.clearfix > button > span";
        this.orderCompleteParagraph = "#center_column > div > p > strong";
        this.orderCompleteMessage = "Your order on My Store is complete.";
    }

    public selectPayByBankWire(): void {
        cy.get(this.payByBankWireButton).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click();
    }

    public checkOrderComplete(): void {
        cy.get(this.orderCompleteParagraph)
        .should("have.text", this.orderCompleteMessage);
    }

}
export { PaymentStepPage }