import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index.ts";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let productsListPage: ProductsListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then should be bought a t-shirt", () => {
    // Arrange
    const emailForLogin = "aperdomobo@gmail.com";
    const passwordForLogin = "WorkshopProtractor";
    const orderCompleteMessage = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToTShirtMenu();
    productsListPage.addItemToCart();
    shoppingCartPage.checkoutItemInCart();
    shoppingCartPage.checkoutItemInSummary();
    loginPage.fillOutEmail(emailForLogin);
    loginPage.fillOutPassword(passwordForLogin);
    loginPage.signIn();
    addressStepPage.checkoutItemInAddress();
    shippingStepPage.agreeWithTerms();
    shippingStepPage.checkoutItemInShipping();
    paymentStepPage.selectPayByBankWire();
    paymentStepPage.confirmOrder();

    // Assert
    paymentStepPage.checkOrderComplete(orderCompleteMessage);
  });
});
