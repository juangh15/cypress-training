import { 
  MenuContentPage, 
  DressesListPage 
} from "../page/index.ts";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // Arrange
    let expectedNumberOfDresses = 5;
    let expectedDressNames: string[] = [
      'Printed Dress', 
      'Printed Dress', 
      'Printed Summer Dress', 
      'Printed Summer Dress', 
      'Printed Chiffon Dress'
    ];

    //Action
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();

    //Assert
    dressesListPage.validateItemsNumber(expectedNumberOfDresses);
    dressesListPage.validateItemsNames(expectedDressNames);
  });
});
