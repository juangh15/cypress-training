class PaymentStepPage {
    private payByBankWireButton: string;
    private confirmOrderButton: string;
    private orderCompleteParagraph: string;

    constructor() {
        this.payByBankWireButton = ".payment_module > .bankwire > span";
        this.confirmOrderButton = ".cart_navigation.clearfix > button > span";
        this.orderCompleteParagraph = "#center_column > div > p > strong";
    }

    public selectPayByBankWire(): void {
        cy.get(this.payByBankWireButton).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderButton).click();
    }

    public checkOrderComplete(orderCompleteMessage: string): void {
        cy.get(this.orderCompleteParagraph)
        .should("have.text", orderCompleteMessage);
    }

}
export { PaymentStepPage }