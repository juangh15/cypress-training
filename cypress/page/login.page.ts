class LoginPage {

    private emailField: string;
    private passwordField: string;
    private signInButton: string;

    constructor() {
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.signInButton = "#SubmitLogin > span";
    }

    public fillOutEmail(emailForTesting: string): void {
        cy.get(this.emailField).type(emailForTesting);
    }

    public fillOutPassword(passwordForTesting: string): void {
        cy.get(this.passwordField).type(passwordForTesting);
    }

    public signIn(): void {
        cy.get(this.signInButton).click();
    }
}
export { LoginPage }