import Stepper from "./Stepper";

describe("<Stepper Component test>", () => {
  // Set up some constants for the selectors
  const stepperSelector = '[data-testid="stepper"]';
  const incrementSelector = '[aria-label="increment"]';
  const decrementSelector = '[aria-label="decrement"]';

  it("stepper should default to 0", () => {
    // Arrange
    cy.mount(<Stepper />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 0);
  });

  it('supports and "initial" prop to set the value', () => {
    // Arrange
    cy.mount(<Stepper initial={100} />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 100);
  });

  it('can be incremented by clicking the "+" button', () => {
    // Arrange
    cy.mount(<Stepper />);
    // Act
    cy.get(incrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", 1);
  });

  it('can be decremented by clicking the "-" button', () => {
    // Arrange
    cy.mount(<Stepper />);
    // Act
    cy.get(decrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", -1);
  });

  it("has an initial counter that can be incremented and decremented", () => {
    // Arrange
    cy.mount(<Stepper initial={10} />);
    // Act
    cy.get(incrementSelector).click().click();
    cy.get(decrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", 11);
  });

  // or
  it("has an initial counter that can be incremented and decremented (Variation)", () => {
    // Arrange
    cy.mount(<Stepper initial={100} />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 100);
    // Act
    cy.get(incrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", 101);

    // Act
    cy.get(incrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", 102);

    // Act
    cy.get(decrementSelector).click();
    // Assert
    cy.get(stepperSelector).should("contain.text", 101);
  });
});
