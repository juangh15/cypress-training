class LoginPage {

    private emailField: string;
    private passwordField: string;
    private signInButton: string;

    constructor() {
        this.emailField = "#email";
        this.passwordField = "#passwd";
        this.signInButton = "#SubmitLogin > span";
        this.emailForTesting = "aperdomobo@gmail.com";
        this.passwordForTesting = "WorkshopProtractor";
    }

    public fillOutEmail(): void {
        cy.get(this.emailField).type(this.emailForTesting);
    }

    public fillOutPassword(): void {
        cy.get(this.passwordField).type(this.passwordForTesting);
    }

    public signIn(): void {
        cy.get(this.signInButton).click();
    }

}
export { LoginPage }