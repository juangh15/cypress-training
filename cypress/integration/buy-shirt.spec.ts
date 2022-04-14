import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index.ts";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addItemToCart();
    shoppingCartPage.checkoutItemInCart();
    shoppingCartPage.checkoutItemInSummary();
    loginPage.fillOutEmail();
    loginPage.fillOutPassword();
    loginPage.signIn();
    addressStepPage.checkoutItemInAddress();
    shippingStepPage.agreeWithTerms();
    shippingStepPage.checkoutItemInShipping();
    paymentStepPage.selectPayByBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.checkOrderComplete();
  });
});
